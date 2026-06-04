function applyTwice<T>(f: (x: T) => T, x: T): T {
  return f(f(x));
}

const inc = (n: number): number => n + 1;

console.log(applyTwice(inc, 3));
