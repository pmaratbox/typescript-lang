class RangeIterator {
  private current: number;
  constructor(
    start: number,
    private end: number,
  ) {
    this.current = start;
  }
  hasNext(): boolean {
    return this.current <= this.end;
  }
  next(): number {
    return this.current++;
  }
}

const it = new RangeIterator(1, 3);
const out: number[] = [];
while (it.hasNext()) {
  out.push(it.next());
}
console.log(out.join(" "));
