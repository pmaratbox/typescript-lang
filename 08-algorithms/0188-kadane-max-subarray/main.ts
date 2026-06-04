function kadane(xs: number[]): number {
  let best = xs[0];
  let cur = xs[0];
  for (let i = 1; i < xs.length; i++) {
    cur = Math.max(xs[i], cur + xs[i]);
    best = Math.max(best, cur);
  }
  return best;
}

console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
