function popcount(x: number): number {
  let count = 0;
  while (x !== 0) {
    x &= x - 1;
    count++;
  }
  return count;
}

const hamming = (a: number, b: number): number => popcount(a ^ b);
console.log(hamming(1, 4));
