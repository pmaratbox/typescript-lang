function newtonSqrt(n: number): number {
  let x = n;
  for (;;) {
    const next = x - (x * x - n) / (2 * x);
    if (Math.abs(next - x) < 1e-12) {
      return next;
    }
    x = next;
  }
}

console.log(newtonSqrt(2).toFixed(4));
