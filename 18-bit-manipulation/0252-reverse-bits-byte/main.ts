function reverseByte(x: number): number {
  let result = 0;
  for (let i = 0; i < 8; i++) {
    result = (result << 1) | ((x >> i) & 1);
  }
  return result;
}

console.log(reverseByte(1));
