type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Observable<T> = (observer: Observer<T>) => void;

function fromValues<T>(values: readonly T[]): Observable<T> {
  return (observer) => {
    for (const value of values) {
      observer.next(value);
    }
    observer.complete?.();
  };
}

function filter<T>(
  source: Observable<T>,
  pred: (value: T) => boolean,
): Observable<T> {
  return (observer) => {
    source({
      next: (value) => {
        if (pred(value)) {
          observer.next(value);
        }
      },
      error: (err) => observer.error?.(err),
      complete: () => observer.complete?.(),
    });
  };
}

const source = fromValues([1, 2, 3, 4, 5, 6]);
const evens = filter(source, (n) => n % 2 === 0);

evens({
  next: (value) => console.log(value),
});
