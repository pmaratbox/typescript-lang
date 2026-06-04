function factorize(n: number): number[] {
  const factors: number[] = [];
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  for (let f = 3; f * f <= n; f += 2) {
    while (n % f === 0) {
      factors.push(f);
      n /= f;
    }
  }
  if (n > 1) factors.push(n);
  return factors;
}

console.log(factorize(60).join(" "));
