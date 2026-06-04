function flatMap<T, U>(xs: T[], f: (x: T) => U[]): U[] {
  return xs.flatMap(f);
}

const result = flatMap([1, 2, 3], (x) => [x, x * 10]);
console.log(result.join(" "));
