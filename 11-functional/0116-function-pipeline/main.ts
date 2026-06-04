const pipe = <T>(...fns: Array<(x: T) => T>) =>
  (x: T): T => fns.reduce((acc, f) => f(acc), x);

const inc = (x: number): number => x + 1;
const double = (x: number): number => x * 2;
const neg = (x: number): number => -x;

const f = pipe(inc, double, neg);

console.log(f(3));
