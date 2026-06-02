const cache = new Map<number, number>();

function fib(n: number): number {
  if (n < 2) return n;
  const cached = cache.get(n);
  if (cached !== undefined) return cached;
  const result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);
  return result;
}

console.log(fib(10));
