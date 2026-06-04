interface Monoid<T> {
  empty: T;
  combine: (a: T, b: T) => T;
}

function fold<T>(m: Monoid<T>, xs: T[]): T {
  return xs.reduce(m.combine, m.empty);
}

const stringMonoid: Monoid<string> = { empty: "", combine: (a, b) => a + b };
const sumMonoid: Monoid<number> = { empty: 0, combine: (a, b) => a + b };

const s = fold(stringMonoid, ["a", "b", "c"]);
const n = fold(sumMonoid, [1, 2, 3]);

console.log(`${s} ${n}`);
