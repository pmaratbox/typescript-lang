function power(base: number, exp: number): number {
  return exp === 0 ? 1 : base * power(base, exp - 1);
}

console.log(power(2, 10));
