type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Observable<T> = {
  subscribe: (observer: Observer<T>) => void;
};

function of<T>(...values: T[]): Observable<T> {
  return {
    subscribe(observer) {
      for (const value of values) observer.next(value);
      observer.complete?.();
    },
  };
}

function distinctUntilChanged<T>(source: Observable<T>): Observable<T> {
  return {
    subscribe(observer) {
      let hasLast = false;
      let last: T;
      source.subscribe({
        next(value) {
          if (!hasLast || value !== last) {
            hasLast = true;
            last = value;
            observer.next(value);
          }
        },
        error: observer.error?.bind(observer),
        complete: observer.complete?.bind(observer),
      });
    },
  };
}

distinctUntilChanged(of(1, 1, 2, 2, 2, 3, 1)).subscribe({
  next: (value) => console.log(value),
});
