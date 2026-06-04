function sum(xs: number[]): number {
  if (xs.length === 0) return 0;
  const [head, ...tail] = xs;
  return head + sum(tail);
}

console.log(sum([1, 2, 3, 4]));
