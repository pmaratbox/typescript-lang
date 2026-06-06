// Zip Streams: pair values by index from two sources and combine them.
// A push-based Observable implemented from scratch; zip buffers each source
// in its own queue and emits combine(x, y) once both queues are non-empty.

type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Subscriber<T> = (observer: Observer<T>) => void;

class Observable<T> {
  constructor(private readonly subscribe: Subscriber<T>) {}

  subscribeTo(observer: Observer<T>): void {
    this.subscribe(observer);
  }

  static of<T>(...values: T[]): Observable<T> {
    return new Observable<T>((observer) => {
      for (const value of values) {
        observer.next(value);
      }
      observer.complete?.();
    });
  }
}

function zip<A, B, R>(
  a: Observable<A>,
  b: Observable<B>,
  combine: (x: A, y: B) => R,
): Observable<R> {
  return new Observable<R>((observer) => {
    const qa: A[] = [];
    const qb: B[] = [];

    const tryEmit = (): void => {
      while (qa.length > 0 && qb.length > 0) {
        const x = qa.shift() as A;
        const y = qb.shift() as B;
        observer.next(combine(x, y));
      }
    };

    a.subscribeTo({
      next: (x) => {
        qa.push(x);
        tryEmit();
      },
    });
    b.subscribeTo({
      next: (y) => {
        qb.push(y);
        tryEmit();
      },
    });

    observer.complete?.();
  });
}

const a = Observable.of(1, 2, 3);
const b = Observable.of(10, 20, 30);

zip(a, b, (x: number, y: number) => x + y).subscribeTo({
  next: (value) => console.log(value),
});
