type Predicate<T> = (x: T) => boolean;

const and = <T>(p: Predicate<T>, q: Predicate<T>): Predicate<T> =>
  (x: T) => p(x) && q(x);

const isEven: Predicate<number> = (x) => x % 2 === 0;
const isPositive: Predicate<number> = (x) => x > 0;

const test = and(isEven, isPositive);

console.log(`${test(4) ? "yes" : "no"} ${test(-4) ? "yes" : "no"}`);
