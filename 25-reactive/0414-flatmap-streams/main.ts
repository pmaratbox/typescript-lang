// FlatMap (mergeMap) over a from-scratch push-based Observable, driven by a
// virtual-time scheduler so all timing is fully synchronous and deterministic.

type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Scheduled = {
  time: number;
  seq: number;
  cancelled: boolean;
  run: () => void;
};

class Scheduler {
  private queue: Scheduled[] = [];
  private seq = 0;
  now = 0;

  schedule(time: number, run: () => void): Scheduled {
    const task: Scheduled = { time, seq: this.seq++, cancelled: false, run };
    this.queue.push(task);
    return task;
  }

  cancel(task: Scheduled): void {
    task.cancelled = true;
  }

  run(): void {
    while (this.queue.length > 0) {
      let bestIndex = 0;
      for (let i = 1; i < this.queue.length; i++) {
        const a = this.queue[i];
        const b = this.queue[bestIndex];
        if (a.time < b.time || (a.time === b.time && a.seq < b.seq)) {
          bestIndex = i;
        }
      }
      const [task] = this.queue.splice(bestIndex, 1);
      if (task.cancelled) continue;
      this.now = task.time;
      task.run();
    }
  }
}

class Observable<T> {
  constructor(private readonly producer: (observer: Observer<T>) => void) {}

  subscribe(observer: Observer<T>): void {
    this.producer(observer);
  }

  // Map each outer value to an inner Observable and merge all inners
  // concurrently, with no cancellation of previously started inners.
  flatMap<R>(project: (value: T) => Observable<R>): Observable<R> {
    return new Observable<R>((observer) => {
      this.subscribe({
        next: (value) => {
          const inner = project(value);
          inner.subscribe({
            next: (innerValue) => observer.next(innerValue),
          });
        },
      });
    });
  }
}

// A source that emits each (time, value) pair by scheduling it on the clock.
function timed<T>(scheduler: Scheduler, events: Array<[number, T]>): Observable<T> {
  return new Observable<T>((observer) => {
    for (const [time, value] of events) {
      scheduler.schedule(time, () => observer.next(value));
    }
  });
}

const scheduler = new Scheduler();

// Outer schedules (10 -> 1), (20 -> 2).
const outer = timed<number>(scheduler, [
  [10, 1],
  [20, 2],
]);

// For each outer value n, the inner schedules (now+5 -> n) and (now+30 -> n*10).
const merged = outer.flatMap<number>((n) => {
  const base = scheduler.now;
  return timed<number>(scheduler, [
    [base + 5, n],
    [base + 30, n * 10],
  ]);
});

merged.subscribe({
  next: (value) => console.log(value),
});

scheduler.run();
