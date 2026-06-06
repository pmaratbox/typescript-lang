type Observer<T> = {
  next: (value: T) => void;
  error: (err: unknown) => void;
  complete: () => void;
};

type Observable<T> = {
  subscribe: (observer: Observer<T>) => void;
};

// retry(n): on error, resubscribe to the source up to n more times.
const retry = <T>(source: Observable<T>, n: number): Observable<T> => ({
  subscribe: (observer) => {
    let remaining = n;
    const attempt = (): void => {
      source.subscribe({
        next: observer.next,
        complete: observer.complete,
        error: (err) => {
          if (remaining > 0) {
            remaining -= 1;
            attempt();
          } else {
            observer.error(err);
          }
        },
      });
    };
    attempt();
  },
});

// Source that fails on the first two subscriptions and succeeds on the third.
let attempts = 0;
const flaky: Observable<string> = {
  subscribe: (observer) => {
    attempts += 1;
    console.log(`attempt ${attempts}`);
    if (attempts < 3) {
      observer.error(new Error("boom"));
    } else {
      observer.next("ok");
      observer.complete();
    }
  },
};

retry(flaky, 2).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(`error: ${String(err)}`),
  complete: () => {},
});
