function reverse(xs: number[]): number[] {
  if (xs.length === 0) return [];
  const [head, ...tail] = xs;
  return [...reverse(tail), head];
}

console.log(reverse([1, 2, 3]).join(" "));
