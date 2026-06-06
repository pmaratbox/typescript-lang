type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Observable<T> = (observer: Observer<T>) => void;

function of<T>(...values: T[]): Observable<T> {
  return (observer) => {
    for (const value of values) {
      observer.next(value);
    }
    observer.complete?.();
  };
}

function concat<T>(a: Observable<T>, b: Observable<T>): Observable<T> {
  return (observer) => {
    a({
      next: (value) => observer.next(value),
      error: (err) => observer.error?.(err),
      complete: () => {
        b({
          next: (value) => observer.next(value),
          error: (err) => observer.error?.(err),
          complete: () => observer.complete?.(),
        });
      },
    });
  };
}

const stream: Observable<number> = concat(of(1, 2), of(3, 4));

stream({
  next: (value) => console.log(value),
});
