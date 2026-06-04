function catalans(count: number): number[] {
  const result: number[] = [];
  let c = 1;
  for (let n = 0; n < count; n++) {
    result.push(c);
    c = (c * 2 * (2 * n + 1)) / (n + 2);
  }
  return result;
}

console.log(catalans(5).join(" "));
