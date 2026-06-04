const frequentchar: string = "hello";
const counts = new Map<string, number>();
let best = frequentchar[0];
let bestCount = 0;
for (const ch of frequentchar) {
  const n = (counts.get(ch) ?? 0) + 1;
  counts.set(ch, n);
  if (n > bestCount) {
    bestCount = n;
    best = ch;
  }
}
console.log(best);
