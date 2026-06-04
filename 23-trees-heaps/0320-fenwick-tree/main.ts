class Fenwick {
  private tree: number[];

  constructor(n: number) {
    this.tree = new Array(n + 1).fill(0);
  }

  // add delta at 1-based index i
  update(i: number, delta: number): void {
    for (; i < this.tree.length; i += i & -i) {
      this.tree[i] += delta;
    }
  }

  // prefix sum of first i elements (1-based, inclusive)
  prefix(i: number): number {
    let sum = 0;
    for (; i > 0; i -= i & -i) {
      sum += this.tree[i];
    }
    return sum;
  }
}

const values = [1, 2, 3, 4, 5];
const bit = new Fenwick(values.length);
values.forEach((v, idx) => bit.update(idx + 1, v));

console.log(bit.prefix(4));
