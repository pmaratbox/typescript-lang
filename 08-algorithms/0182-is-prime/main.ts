function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log([7, 9].map((n) => (isPrime(n) ? "yes" : "no")).join(" "));
