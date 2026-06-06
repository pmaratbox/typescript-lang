type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
  // A producer checks this between emissions to honour mid-stream unsubscribe.
  closed?: boolean;
};

type Subscription = { unsubscribe: () => void };

type Observable<T> = (observer: Observer<T>) => Subscription;

// Unbounded source of the natural numbers 1, 2, 3, ...
// It keeps emitting until the observer is closed (unsubscribed), checking the
// `closed` flag between every emission so an infinite stream can be stopped.
function naturals(): Observable<number> {
  return (observer) => {
    observer.closed = false;
    let n = 0;
    while (!observer.closed) {
      n += 1;
      observer.next(n);
    }
    return { unsubscribe: () => { observer.closed = true; } };
  };
}

function take<T>(source: Observable<T>, count: number): Observable<T> {
  return (observer) => {
    let taken = 0;
    // The bridge observer the source drives; setting `closed` stops the source.
    const bridge: Observer<T> = {
      next: (value) => {
        if (bridge.closed) return;
        observer.next(value);
        taken += 1;
        if (taken >= count) {
          observer.complete?.();
          bridge.closed = true; // unsubscribe the source: stop the loop
        }
      },
      error: (err) => observer.error?.(err),
      complete: () => observer.complete?.(),
    };
    return source(bridge);
  };
}

take(naturals(), 3)({
  next: (value) => console.log(value),
  complete: () => console.log("completed"),
});
