function gcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function reduce(num: number, den: number): [number, number] {
  const g = gcd(num, den);
  return [num / g, den / g];
}

const [n, d] = reduce(6, 8);
console.log(`${n}/${d}`);
