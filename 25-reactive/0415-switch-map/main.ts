// SwitchMap over a from-scratch push-based Observable, driven by a virtual-time
// scheduler so all timing is fully synchronous and deterministic. When a new
// outer value arrives, the previous inner's still-pending emissions are cancelled.

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

// An inner Observable that also exposes the scheduler tokens it created, so a
// switchMap can cancel them when a newer inner takes over.
type Cancellable<T> = {
  source: Observable<T>;
  tokens: Scheduled[];
};

class Observable<T> {
  constructor(private readonly producer: (observer: Observer<T>) => void) {}

  subscribe(observer: Observer<T>): void {
    this.producer(observer);
  }

  // Map each outer value to a Cancellable inner; on each new outer value, cancel
  // the previous inner's still-pending scheduled emissions before subscribing.
  switchMap<R>(
    scheduler: Scheduler,
    project: (value: T) => Cancellable<R>,
  ): Observable<R> {
    return new Observable<R>((observer) => {
      let active: Scheduled[] = [];
      this.subscribe({
        next: (value) => {
          for (const token of active) scheduler.cancel(token);
          const { source, tokens } = project(value);
          active = tokens;
          source.subscribe({ next: (innerValue) => observer.next(innerValue) });
        },
      });
    });
  }
}

// A source that emits each (time, value) pair by scheduling it on the clock,
// returning both the Observable and the scheduler tokens it created.
function timed<T>(scheduler: Scheduler, events: Array<[number, T]>): Cancellable<T> {
  const tokens: Scheduled[] = [];
  const source = new Observable<T>((observer) => {
    for (const [time, value] of events) {
      tokens.push(scheduler.schedule(time, () => observer.next(value)));
    }
  });
  return { source, tokens };
}

const scheduler = new Scheduler();

// Outer schedules (10 -> 1), (20 -> 2).
const outer = timed<number>(scheduler, [
  [10, 1],
  [20, 2],
]).source;

// For each outer value n, the inner schedules (now+5 -> n) and (now+30 -> n*10).
const switched = outer.switchMap<number>(scheduler, (n) => {
  const base = scheduler.now;
  return timed<number>(scheduler, [
    [base + 5, n],
    [base + 30, n * 10],
  ]);
});

switched.subscribe({
  next: (value) => console.log(value),
});

scheduler.run();
