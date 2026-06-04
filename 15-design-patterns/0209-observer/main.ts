interface Observer {
  update(value: number): void;
}

class PrintObserver implements Observer {
  constructor(private id: string) {}
  update(value: number): void {
    console.log(`${this.id}: ${value}`);
  }
}

class Subject {
  private observers: Observer[] = [];
  subscribe(o: Observer): void {
    this.observers.push(o);
  }
  notify(value: number): void {
    for (const o of this.observers) {
      o.update(value);
    }
  }
}

const subject = new Subject();
subject.subscribe(new PrintObserver("obs1"));
subject.subscribe(new PrintObserver("obs2"));
subject.notify(5);
