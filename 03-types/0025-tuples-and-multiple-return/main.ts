function minMax(a: number, b: number): [number, number] {
  return [Math.min(a, b), Math.max(a, b)];
}

const [lo, hi] = minMax(3, 7);
console.log(`min: ${lo}`);
console.log(`max: ${hi}`);
