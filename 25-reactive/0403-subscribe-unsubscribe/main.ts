type Subscription = {
  unsubscribe: () => void;
};

// The consumer receives its own Subscription, so it can unsubscribe from
// inside next() — even while the producer is still emitting synchronously.
type Observer<T> = {
  next: (value: T, subscription: Subscription) => void;
  complete: () => void;
};

type Observable<T> = {
  subscribe: (observer: Observer<T>) => Subscription;
};

// A producer that would push 1,2,3,4. It checks a shared "closed" flag before
// each next, so a consumer that unsubscribes mid-stream stops further delivery.
const source: Observable<number> = {
  subscribe: (observer) => {
    const state = { closed: false };
    const subscription: Subscription = {
      unsubscribe: () => {
        state.closed = true;
      },
    };
    for (const value of [1, 2, 3, 4]) {
      if (state.closed) break;
      observer.next(value, subscription);
    }
    if (!state.closed) observer.complete();
    return subscription;
  },
};

let count = 0;

source.subscribe({
  next: (value, subscription) => {
    console.log(value);
    if (++count === 2) subscription.unsubscribe();
  },
  complete: () => console.log("complete"),
});
