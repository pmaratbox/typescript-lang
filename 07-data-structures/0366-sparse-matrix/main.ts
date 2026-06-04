class SparseMatrix {
  private entries = new Map<string, number>();

  private key(row: number, col: number): string {
    return `${row},${col}`;
  }

  set(row: number, col: number, value: number): void {
    if (value === 0) this.entries.delete(this.key(row, col));
    else this.entries.set(this.key(row, col), value);
  }

  get(row: number, col: number): number {
    return this.entries.get(this.key(row, col)) ?? 0;
  }
}

const m = new SparseMatrix();
m.set(1, 1, 5);
console.log(`${m.get(1, 1)} ${m.get(0, 0)}`);
