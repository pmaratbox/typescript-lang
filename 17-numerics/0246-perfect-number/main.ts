function isPerfect(n: number): boolean {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}

const label = (n: number): string => (isPerfect(n) ? "yes" : "no");
console.log(`${label(6)} ${label(8)}`);
