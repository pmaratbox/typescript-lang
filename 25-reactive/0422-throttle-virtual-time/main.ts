type Observer<T> = {
  next: (value: T) => void;
  complete?: () => void;
};

type Observable<T> = (observer: Observer<T>) => void;

type Task = { time: number; seq: number; cb: () => void; dead: boolean };

class VirtualScheduler {
  private queue: Task[] = [];
  private seq = 0;
  now = 0;

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
      let idx = 0;
      for (let i = 1; i < this.queue.length; i++) {
        const a = this.queue[i];
        const b = this.queue[idx];
        if (a.time < b.time || (a.time === b.time && a.seq < b.seq)) idx = i;
      }
      const task = this.queue.splice(idx, 1)[0];
      if (task.dead) continue;
      this.now = task.time;
      task.cb();
    }
  }
}

function fromSchedule<T>(
  scheduler: VirtualScheduler,
  events: ReadonlyArray<readonly [T, number]>,
): Observable<T> {
  return (observer) => {
    for (const [value, time] of events) {
      scheduler.schedule(time, () => observer.next(value));
    }
  };
}

// throttle (leading edge): emit a value, then suppress for `window` ticks.
function throttle<T>(
  scheduler: VirtualScheduler,
  window: number,
  source: Observable<T>,
): Observable<T> {
  return (observer) => {
    let blockUntil = 0;
    source({
      next: (value) => {
        const now = scheduler.now;
        if (now >= blockUntil) {
          blockUntil = now + window;
          observer.next(value);
        }
      },
    });
  };
}

function main(): void {
  const scheduler = new VirtualScheduler();
  const source = fromSchedule(scheduler, [
    ["a", 10],
    ["b", 20],
    ["c", 100],
    ["d", 110],
  ] as const);

  throttle(scheduler, 30, source)({
    next: (value) => console.log(value),
  });

  scheduler.run();
}

main();
