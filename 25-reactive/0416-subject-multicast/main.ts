type Observer<T> = {
  next: (value: T) => void;
  error?: (err: unknown) => void;
  complete?: () => void;
};

class Subject<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  next(value: T): void {
    for (const observer of this.observers) {
      observer.next(value);
    }
  }
}

const subject = new Subject<number>();

subject.subscribe({ next: (v) => console.log(`obs1: ${v}`) });
subject.subscribe({ next: (v) => console.log(`obs2: ${v}`) });

subject.next(1);
subject.next(2);
