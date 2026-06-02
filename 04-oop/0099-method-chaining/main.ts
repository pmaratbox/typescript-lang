class Calc {
  constructor(private value: number) {}
  add(n: number): this {
    this.value += n;
    return this;
  }
  multiply(n: number): this {
    this.value *= n;
    return this;
  }
  result(): number {
    return this.value;
  }
}

console.log(new Calc(5).add(3).multiply(2).result());
