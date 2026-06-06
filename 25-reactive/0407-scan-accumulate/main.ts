type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Observable<T> = (observer: Observer<T>) => void;

function fromArray<T>(values: readonly T[]): Observable<T> {
  return (observer) => {
    for (const value of values) observer.next(value);
    observer.complete?.();
  };
}

function scan<T, A>(
  source: Observable<T>,
  acc: A,
  f: (state: A, value: T) => A,
): Observable<A> {
  return (observer) => {
    let state = acc;
    source({
      next: (value) => {
        state = f(state, value);
        observer.next(state);
      },
      error: (err) => observer.error?.(err),
      complete: () => observer.complete?.(),
    });
  };
}

const sums = scan(fromArray([1, 2, 3, 4]), 0, (state, value) => state + value);

sums({
  next: (value) => console.log(value),
});
