const text = "aab";
const counts = new Map<string, number>();
for (const ch of text) {
  counts.set(ch, (counts.get(ch) ?? 0) + 1);
}
const result = [...counts].map(([ch, n]) => `${ch}:${n}`).join(" ");
console.log(result);
