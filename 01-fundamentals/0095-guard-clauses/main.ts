function classify(n: number): string {
  if (n < 0) return "negative";
  if (n === 0) return "zero";
  return "positive";
}

for (const n of [-1, 0, 5]) {
  console.log(classify(n));
}
