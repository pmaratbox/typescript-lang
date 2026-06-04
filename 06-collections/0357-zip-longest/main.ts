const a = [1, 2, 3];
const b = ["a", "b"];
const n = Math.max(a.length, b.length);
const out: string[] = [];
for (let i = 0; i < n; i++) {
  const left = i < a.length ? String(a[i]) : "-";
  const right = i < b.length ? b[i] : "-";
  out.push(left + right);
}
console.log(out.join(" "));
