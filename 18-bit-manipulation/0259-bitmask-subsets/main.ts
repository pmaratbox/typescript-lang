function submasks(mask: number): number[] {
  const result: number[] = [];
  let sub = mask;
  while (true) {
    result.push(sub);
    if (sub === 0) break;
    sub = (sub - 1) & mask;
  }
  return result;
}

console.log(submasks(5).join(" "));
