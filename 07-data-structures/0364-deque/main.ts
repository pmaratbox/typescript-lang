class Deque<T> {
  private items: T[] = [];

  pushFront(value: T): void {
    this.items.unshift(value);
  }

  pushBack(value: T): void {
    this.items.push(value);
  }

  popFront(): T | undefined {
    return this.items.shift();
  }

  popBack(): T | undefined {
    return this.items.pop();
  }

  toArray(): T[] {
    return [...this.items];
  }
}

const dq = new Deque<number>();
dq.pushBack(1);
dq.pushBack(2);
dq.pushFront(0);
console.log(dq.toArray().join(" "));
