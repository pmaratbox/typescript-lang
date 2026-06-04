function extGcd(a: number, b: number): [number, number, number] {
  if (b === 0) {
    return [a, 1, 0];
  }
  const [g, x1, y1] = extGcd(b, a % b);
  return [g, y1, x1 - Math.floor(a / b) * y1];
}

const [g, x, y] = extGcd(30, 12);
console.log(`${g} ${x} ${y}`);
