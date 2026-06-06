type Observer<T> = {
  next: (value: T) => void;
  complete?: () => void;
};

// A cold observable runs its producer fresh for every subscriber.
class ColdObservable<T> {
  constructor(private readonly producer: (observer: Observer<T>) => void) {}

  subscribe(observer: Observer<T>): void {
    this.producer(observer);
  }
}

// A hot observable shares one producer; emit() pushes to whoever is subscribed now.
class HotObservable<T> {
  private readonly observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  emit(value: T): void {
    for (const observer of this.observers) {
      observer.next(value);
    }
  }
}

function collect<T>(label: string): { observer: Observer<T>; values: T[] } {
  void label;
  const values: T[] = [];
  return { observer: { next: (v) => values.push(v) }, values };
}

// COLD: each subscriber triggers an independent run of the producer.
const cold = new ColdObservable<number>((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete?.();
});

const coldA = collect<number>("cold A");
const coldB = collect<number>("cold B");
cold.subscribe(coldA.observer);
cold.subscribe(coldB.observer);

console.log(`cold A: ${coldA.values.join(" ")}`);
console.log(`cold B: ${coldB.values.join(" ")}`);

// HOT: a single shared execution; B subscribes late and misses the first value.
const hot = new HotObservable<number>();
const hotA = collect<number>("hot A");
const hotB = collect<number>("hot B");

hot.subscribe(hotA.observer);
hot.emit(1);
hot.subscribe(hotB.observer);
hot.emit(2);
hot.emit(3);

console.log(`hot A: ${hotA.values.join(" ")}`);
console.log(`hot B: ${hotB.values.join(" ")}`);
