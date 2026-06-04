class MaxHeap {
  private data: number[] = [];

  push(val: number): void {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.data[parent] >= this.data[i]) break;
      [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
      i = parent;
    }
  }

  pop(): number {
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      let i = 0;
      const n = this.data.length;
      while (true) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let largest = i;
        if (l < n && this.data[l] > this.data[largest]) largest = l;
        if (r < n && this.data[r] > this.data[largest]) largest = r;
        if (largest === i) break;
        [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
        i = largest;
      }
    }
    return top;
  }
}

const heap = new MaxHeap();
for (const v of [3, 1, 4, 1, 5]) heap.push(v);

const out = [heap.pop(), heap.pop(), heap.pop()];
console.log(out.join(" "));
