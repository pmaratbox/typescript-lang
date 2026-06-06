type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Observable<T> = {
  subscribe: (observer: Observer<T>) => void;
};

function fromValues<T>(values: T[]): Observable<T> {
  return {
    subscribe(observer) {
      for (const value of values) observer.next(value);
      observer.complete?.();
    },
  };
}

function map<T, U>(source: Observable<T>, f: (value: T) => U): Observable<U> {
  return {
    subscribe(observer) {
      source.subscribe({
        next: (value) => observer.next(f(value)),
        error: observer.error,
        complete: observer.complete,
      });
    },
  };
}

const source = fromValues([1, 2, 3, 4]);
const doubled = map(source, (x) => x * 2);

doubled.subscribe({
  next: (value) => console.log(value),
});
