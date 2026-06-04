class Buffer {
  private data: (number | undefined)[];
  private head = 0;
  private count = 0;
  constructor(private capacity: number) {
    this.data = new Array<number | undefined>(capacity);
  }

  push(value: number): void {
    const tail = (this.head + this.count) % this.capacity;
    this.data[tail] = value;
    if (this.count < this.capacity) {
      this.count++;
    } else {
      this.head = (this.head + 1) % this.capacity;
    }
  }

  contents(): number[] {
    const out: number[] = [];
    for (let i = 0; i < this.count; i++) {
      out.push(this.data[(this.head + i) % this.capacity]!);
    }
    return out;
  }
}

const buf = new Buffer(3);
for (const value of [1, 2, 3, 4, 5]) {
  buf.push(value);
}
console.log(buf.contents().join(" "));
