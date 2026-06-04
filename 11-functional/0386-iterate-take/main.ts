function iterateTake<T>(f: (x: T) => T, seed: T, n: number): T[] {
  const out: T[] = [];
  let x = seed;
  for (let i = 0; i < n; i++) {
    out.push(x);
    x = f(x);
  }
  return out;
}

const values = iterateTake((x) => x * 3, 1, 4);
console.log(values.join(" "));
