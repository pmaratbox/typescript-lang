type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Observable<T> = {
  subscribe: (observer: Observer<T>) => void;
};

type Task = { time: number; seq: number; cb: () => void; dead: boolean };

class VirtualScheduler {
  private queue: Task[] = [];
  private seq = 0;
  clock = 0;

  schedule(time: number, cb: () => void): Task {
    const task: Task = { time, seq: this.seq++, cb, dead: false };
    this.queue.push(task);
    return task;
  }

  cancel(task: Task): void {
    task.dead = true;
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
      if (task.dead) continue;
      this.clock = task.time;
      task.cb();
    }
  }
}

function timed<T>(
  scheduler: VirtualScheduler,
  events: ReadonlyArray<[number, T]>,
): Observable<T> {
  return {
    subscribe(observer) {
      for (const [time, value] of events) {
        scheduler.schedule(time, () => observer.next(value));
      }
    },
  };
}

function debounce<T>(
  scheduler: VirtualScheduler,
  source: Observable<T>,
  window: number,
): Observable<T> {
  return {
    subscribe(observer) {
      let pending: Task | null = null;
      source.subscribe({
        next: (value) => {
          if (pending) scheduler.cancel(pending);
          pending = scheduler.schedule(scheduler.clock + window, () => {
            observer.next(value);
          });
        },
        error: observer.error?.bind(observer),
        complete: observer.complete?.bind(observer),
      });
    },
  };
}

const scheduler = new VirtualScheduler();
const source = timed(scheduler, [
  [10, "a"],
  [20, "b"],
  [100, "c"],
]);

debounce(scheduler, source, 30).subscribe({
  next: (value) => console.log(value),
});
scheduler.run();
