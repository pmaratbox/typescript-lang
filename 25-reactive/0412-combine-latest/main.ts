type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

type Observable<T> = (observer: Observer<T>) => void;

type Task = { time: number; seq: number; alive: boolean; run: () => void };

class Scheduler {
  private queue: Task[] = [];
  private seq = 0;
  clock = 0;

  schedule(time: number, run: () => void): Task {
    const task: Task = { time, seq: this.seq++, alive: true, run };
    this.queue.push(task);
    return task;
  }

  run(): void {
    while (this.queue.length > 0) {
      let bestIndex = 0;
      for (let i = 1; i < this.queue.length; i++) {
        const t = this.queue[i];
        const best = this.queue[bestIndex];
        if (t.time < best.time || (t.time === best.time && t.seq < best.seq)) {
          bestIndex = i;
        }
      }
      const task = this.queue.splice(bestIndex, 1)[0];
      if (!task.alive) continue;
      this.clock = task.time;
      task.run();
    }
  }
}

function timed<T>(
  scheduler: Scheduler,
  events: ReadonlyArray<readonly [number, T]>,
): Observable<T> {
  return (observer) => {
    for (const [time, value] of events) {
      scheduler.schedule(time, () => observer.next(value));
    }
  };
}

function combineLatest<A, B>(
  a: Observable<A>,
  b: Observable<B>,
): Observable<[A, B]> {
  return (observer) => {
    let latestA: A | undefined;
    let latestB: B | undefined;
    let hasA = false;
    let hasB = false;

    const emit = () => {
      if (hasA && hasB) {
        observer.next([latestA as A, latestB as B]);
      }
    };

    a({
      next: (value) => {
        latestA = value;
        hasA = true;
        emit();
      },
    });
    b({
      next: (value) => {
        latestB = value;
        hasB = true;
        emit();
      },
    });
  };
}

const scheduler = new Scheduler();
const a = timed(scheduler, [
  [1, 1],
  [3, 2],
]);
const b = timed(scheduler, [[2, 10]]);

combineLatest(a, b)({
  next: ([x, y]) => console.log(`(${x}, ${y})`),
});

scheduler.run();
