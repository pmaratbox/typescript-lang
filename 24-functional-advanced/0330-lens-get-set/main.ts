interface Lens<S, A> {
  get: (s: S) => A;
  set: (a: A, s: S) => S;
}

type Outer = { a: { b: number } };

const bLens: Lens<Outer, number> = {
  get: (s) => s.a.b,
  set: (b, s) => ({ ...s, a: { ...s.a, b } }),
};

const data: Outer = { a: { b: 1 } };
const got = bLens.get(data);
const updated = bLens.set(2, data);

console.log(`${got} ${bLens.get(updated)}`);
