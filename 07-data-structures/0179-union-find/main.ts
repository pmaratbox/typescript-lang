class Find {
  private parent: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(x: number): number {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  union(a: number, b: number): void {
    this.parent[this.find(a)] = this.find(b);
  }

  connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }
}

const uf = new Find(4);
uf.union(0, 1);
uf.union(2, 3);
const first = uf.connected(0, 1) ? "yes" : "no";
const second = uf.connected(0, 2) ? "yes" : "no";
console.log(`${first} ${second}`);
