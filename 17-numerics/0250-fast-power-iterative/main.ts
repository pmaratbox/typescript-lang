function fastPow(base: number, exp: number): number {
  let result = 1;
  while (exp > 0) {
    if (exp & 1) {
      result *= base;
    }
    base *= base;
    exp >>= 1;
  }
  return result;
}

console.log(fastPow(2, 10));
