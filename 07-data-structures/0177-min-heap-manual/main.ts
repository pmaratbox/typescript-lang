class HeapManual {
  private data: number[] = [];

  push(value: number): void {
    this.data.push(value);
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.data[parent] <= this.data[i]) break;
      [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
      i = parent;
    }
  }

  pop(): number | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      let i = 0;
      const n = this.data.length;
      for (;;) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;
        if (left < n && this.data[left] < this.data[smallest]) smallest = left;
        if (right < n && this.data[right] < this.data[smallest]) smallest = right;
        if (smallest === i) break;
        [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
        i = smallest;
      }
    }
    return top;
  }

  get size(): number {
    return this.data.length;
  }
}

const heap = new HeapManual();
for (const value of [3, 1, 2]) {
  heap.push(value);
}
const out: number[] = [];
while (heap.size > 0) {
  out.push(heap.pop()!);
}
console.log(out.join(" "));
