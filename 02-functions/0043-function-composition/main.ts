const inc = (x: number): number => x + 1;
const twice = (x: number): number => x * 2;
const compose = (f: (n: number) => number, g: (n: number) => number) => (x: number) => f(g(x));

console.log(compose(inc, twice)(3));
