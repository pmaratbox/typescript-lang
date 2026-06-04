function sumJsonArray(text: string): number {
  const inner = text.trim().slice(1, -1);
  return inner
    .split(",")
    .map((tok) => parseInt(tok.trim(), 10))
    .reduce((a, b) => a + b, 0);
}

console.log(sumJsonArray("[1,2,3]"));
