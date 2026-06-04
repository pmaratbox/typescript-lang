function popcount(x: number): number {
  let count = 0;
  while (x !== 0) {
    x &= x - 1;
    count++;
  }
  return count;
}

const parity = (n: number): number => popcount(n) & 1;
console.log(`${parity(7)} ${parity(5)}`);
