function countTrailingZeros(x: number): number {
  if (x === 0) return 32;
  let count = 0;
  while ((x & 1) === 0) {
    x >>>= 1;
    count++;
  }
  return count;
}

console.log(countTrailingZeros(8));
