type Reducer<A, T> = (acc: A, x: T) => A;
type Transducer<T, U> = <A>(rf: Reducer<A, U>) => Reducer<A, T>;

const mapping = <T, U>(f: (x: T) => U): Transducer<T, U> =>
  (rf) => (acc, x) => rf(acc, f(x));

const filtering = <T>(pred: (x: T) => boolean): Transducer<T, T> =>
  (rf) => (acc, x) => (pred(x) ? rf(acc, x) : acc);

const compose2 = <T, U, V>(a: Transducer<T, U>, b: Transducer<U, V>): Transducer<T, V> =>
  (rf) => a(b(rf));

const xform = compose2(
  mapping((x: number) => x + 1),
  filtering((x: number) => x % 2 === 0),
);

const append: Reducer<number[], number> = (acc, x) => (acc.push(x), acc);
const result = [1, 2, 3, 4].reduce(xform(append), [] as number[]);

console.log(result.join(" "));
