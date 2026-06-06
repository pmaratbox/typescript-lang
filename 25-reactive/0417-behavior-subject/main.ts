interface Observer<T> {
  next: (value: T) => void;
}

class BehaviorSubject<T> {
  private observers: Observer<T>[] = [];

  constructor(private current: T) {}

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
    observer.next(this.current);
  }

  next(value: T): void {
    this.current = value;
    for (const observer of this.observers) {
      observer.next(value);
    }
  }
}

const subject = new BehaviorSubject<number>(0);

subject.subscribe({ next: (v) => console.log(`A: ${v}`) });
subject.next(1);
subject.subscribe({ next: (v) => console.log(`B: ${v}`) });
subject.next(2);
