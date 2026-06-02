const word = "banana";
const counts: Record<string, number> = {};
for (const ch of word) {
  counts[ch] = (counts[ch] ?? 0) + 1;
}

const out = Object.keys(counts)
  .sort()
  .map((ch) => `${ch}:${counts[ch]}`);
console.log(out.join(" "));
