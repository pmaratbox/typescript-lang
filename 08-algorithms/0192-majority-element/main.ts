function majority(xs: number[]): number {
  let candidate = xs[0];
  let count = 0;
  for (const x of xs) {
    if (count === 0) candidate = x;
    count += x === candidate ? 1 : -1;
  }
  return candidate;
}

console.log(majority([2, 2, 1, 2, 3, 2]));
