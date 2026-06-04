class WithMin {
  private values: number[] = [];
  private mins: number[] = [];

  push(value: number): void {
    this.values.push(value);
    const currentMin = this.mins.length === 0 ? value : Math.min(value, this.mins[this.mins.length - 1]);
    this.mins.push(currentMin);
  }

  pop(): number | undefined {
    this.mins.pop();
    return this.values.pop();
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}

const stack = new WithMin();
for (const value of [3, 1, 2]) {
  stack.push(value);
}
console.log(`min: ${stack.getMin()}`);
