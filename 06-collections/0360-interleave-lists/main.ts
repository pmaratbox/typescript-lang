const a = [1, 3, 5];
const b = [2, 4, 6];
const out: number[] = [];
const n = Math.max(a.length, b.length);
for (let i = 0; i < n; i++) {
  if (i < a.length) out.push(a[i]);
  if (i < b.length) out.push(b[i]);
}
console.log(out.join(" "));
