type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete: () => void;
};

type Observable<T> = (observer: Observer<T>) => void;

const ofValues = <T>(...values: T[]): Observable<T> => (observer) => {
  for (const value of values) {
    observer.next(value);
  }
  observer.complete();
};

const source = ofValues(1, 2, 3);

source({
  next: (value) => console.log(value),
  complete: () => console.log("done"),
});
