function unfold<T>(seed: T, next: (x: T) => T, count: number): T[] {
  const out: T[] = [];
  let x = seed;
  for (let i = 0; i < count; i++) {
    out.push(x);
    x = next(x);
  }
  return out;
}

const terms = unfold(1, (x) => x * 2, 5);
console.log(terms.join(" "));
