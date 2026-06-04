const xs = [1, 1, 2, 3, 3, 3];

const order: number[] = [];
const counts = new Map<number, number>();
for (const x of xs) {
  if (!counts.has(x)) order.push(x);
  counts.set(x, (counts.get(x) ?? 0) + 1);
}

const sorted = [...order].sort((a, b) => counts.get(b)! - counts.get(a)!);

const out: number[] = [];
for (const value of sorted) {
  for (let i = 0; i < counts.get(value)!; i++) out.push(value);
}
console.log(out.join(" "));
