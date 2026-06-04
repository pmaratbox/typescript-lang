function scanProduct(xs: number[]): number[] {
  const out: number[] = [];
  let acc = 1;
  for (const x of xs) {
    acc *= x;
    out.push(acc);
  }
  return out;
}

const input = [1, 2, 3, 4];
console.log(scanProduct(input).join(" "));
