function countdown(n: number, acc: number[] = []): number[] {
  if (n < 1) return acc;
  acc.push(n);
  return countdown(n - 1, acc);
}

console.log(countdown(5).join(" "));
