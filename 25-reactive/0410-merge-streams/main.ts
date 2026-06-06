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

function merge<T>(...sources: Observable<T>[]): Observable<T> {
  return {
    subscribe(observer) {
      for (const source of sources) {
        source.subscribe({
          next: (value) => observer.next(value),
          error: observer.error?.bind(observer),
        });
      }
    },
  };
}

const scheduler = new VirtualScheduler();
const a = timed(scheduler, [
  [10, 1],
  [30, 3],
  [50, 5],
]);
const b = timed(scheduler, [
  [20, 2],
  [40, 4],
  [60, 6],
]);

merge(a, b).subscribe({ next: (value) => console.log(value) });
scheduler.run();
