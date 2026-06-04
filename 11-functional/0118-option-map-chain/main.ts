type Option<T> = T | null;

const mapOpt = <T, U>(o: Option<T>, f: (x: T) => U): Option<U> =>
  o === null ? null : f(o);

const unwrapOr = <T>(o: Option<T>, fallback: T): T =>
  o === null ? fallback : o;

const some: Option<number> = 10;
const none: Option<number> = null;

const a = unwrapOr(mapOpt(some, (x) => x + 2), -1);
const b = unwrapOr(mapOpt(none, (x) => x + 2), -1);

console.log(`${a} ${b === -1 ? "none" : b}`);
