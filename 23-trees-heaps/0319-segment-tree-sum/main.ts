class SegmentTree {
  private n: number;
  private tree: number[];

  constructor(values: number[]) {
    this.n = values.length;
    this.tree = new Array(2 * this.n).fill(0);
    for (let i = 0; i < this.n; i++) this.tree[this.n + i] = values[i];
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1];
    }
  }

  // sum over [l, r] inclusive
  query(l: number, r: number): number {
    let sum = 0;
    let lo = l + this.n;
    let hi = r + this.n + 1;
    while (lo < hi) {
      if (lo & 1) sum += this.tree[lo++];
      if (hi & 1) sum += this.tree[--hi];
      lo >>= 1;
      hi >>= 1;
    }
    return sum;
  }
}

const seg = new SegmentTree([1, 2, 3, 4, 5]);
console.log(seg.query(1, 3));
