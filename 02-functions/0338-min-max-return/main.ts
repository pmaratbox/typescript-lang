function minMax(xs: number[]): [number, number] {
  let min = xs[0];
  let max = xs[0];
  for (const x of xs) {
    if (x < min) min = x;
    if (x > max) max = x;
  }
  return [min, max];
}

const [min, max] = minMax([4, 1, 7]);
console.log(`${min} ${max}`);
