type Fn = (n: number) => number;

const Y = (f: (rec: Fn) => Fn): Fn =>
  ((x: any) => f((n) => x(x)(n)))((x: any) => f((n) => x(x)(n)));

const factGen = (self: Fn): Fn => (n) => (n === 0 ? 1 : n * self(n - 1));

const factorial = Y(factGen);
console.log(factorial(5));
