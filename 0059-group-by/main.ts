const words = ["one", "two", "three"];
const groups: Record<number, string[]> = {};
for (const w of words) {
  (groups[w.length] ??= []).push(w);
}

const out = Object.keys(groups)
  .map(Number)
  .sort((a, b) => a - b)
  .map((k) => `${k}:[${groups[k].join(",")}]`);
console.log(out.join(" "));
