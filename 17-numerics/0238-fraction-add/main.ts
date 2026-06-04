function gcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function addFractions(an: number, ad: number, bn: number, bd: number): [number, number] {
  let num = an * bd + bn * ad;
  let den = ad * bd;
  const g = gcd(num, den);
  return [num / g, den / g];
}

const [n, d] = addFractions(1, 2, 1, 3);
console.log(`${n}/${d}`);
