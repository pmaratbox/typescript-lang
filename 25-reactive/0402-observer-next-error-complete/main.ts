type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete: () => void;
};

// Wrap an observer so that, once a terminal (complete/error) fires, the
// "stopped" flag is set and any later next/terminal becomes a no-op.
const guard = <T>(observer: Observer<T>): Observer<T> => {
  let stopped = false;
  return {
    next: (value) => {
      if (stopped) return;
      observer.next(value);
    },
    error: (err) => {
      if (stopped) return;
      stopped = true;
      observer.error?.(err);
    },
    complete: () => {
      if (stopped) return;
      stopped = true;
      observer.complete();
    },
  };
};

const observer = guard<number>({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

observer.next(1);
observer.next(2);
observer.complete();
observer.next(3); // ignored: observer already stopped
