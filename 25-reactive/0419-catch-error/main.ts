type Observer<T> = {
  next: (value: T) => void;
  error: (err: unknown) => void;
  complete: () => void;
};

type Observable<T> = (observer: Observer<T>) => void;

function catchError<T>(source: Observable<T>, fallback: Observable<T>): Observable<T> {
  return (observer) => {
    source({
      next: (value) => observer.next(value),
      error: () => fallback(observer),
      complete: () => observer.complete(),
    });
  };
}

const source: Observable<number> = (observer) => {
  observer.next(1);
  observer.next(2);
  observer.error(new Error("boom"));
};

const fallback: Observable<number> = (observer) => {
  observer.next(9);
  observer.complete();
};

catchError(source, fallback)({
  next: (value) => console.log(value),
  error: (err) => console.log("error", err),
  complete: () => {},
});
