type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

class ReplaySubject<T> {
  private readonly buffer: T[] = [];
  private readonly observers: Observer<T>[] = [];

  constructor(private readonly bufferSize: number) {}

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
    for (const value of this.buffer) {
      observer.next(value);
    }
  }

  next(value: T): void {
    this.buffer.push(value);
    if (this.buffer.length > this.bufferSize) {
      this.buffer.shift();
    }
    for (const observer of this.observers) {
      observer.next(value);
    }
  }
}

const subject = new ReplaySubject<number>(2);

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe({ next: (value) => console.log(value) });

subject.next(4);
