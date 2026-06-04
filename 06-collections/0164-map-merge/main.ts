const left: Record<string, number> = { a: 1, b: 2 };
const right: Record<string, number> = { b: 3, c: 4 };
const merged: Record<string, number> = { ...left, ...right };
const out = Object.keys(merged)
  .sort()
  .map((k) => `${k}:${merged[k]}`)
  .join(" ");
console.log(out);
