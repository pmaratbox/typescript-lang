const items: string[] = ["a", "b", "a", "c", "b", "a"];
const counts = new Map<string, number>();
for (const item of items) {
  counts.set(item, (counts.get(item) ?? 0) + 1);
}
const top = [...counts.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 2)
  .map(([key]) => key);
console.log(top.join(" "));
