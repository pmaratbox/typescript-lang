class CircularQueue {
  private buf: number[];
  private head = 0;
  private tail = 0;
  private count = 0;

  constructor(private capacity: number) {
    this.buf = new Array(capacity);
  }

  enqueue(value: number): boolean {
    if (this.count === this.capacity) return false;
    this.buf[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }

  dequeue(): number | undefined {
    if (this.count === 0) return undefined;
    const value = this.buf[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return value;
  }

  toArray(): number[] {
    const out: number[] = [];
    for (let i = 0; i < this.count; i++) {
      out.push(this.buf[(this.head + i) % this.capacity]);
    }
    return out;
  }
}

const q = new CircularQueue(3);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.enqueue(4);
console.log(q.toArray().join(" "));
