const pq: number[] = [];
function push(n: number): void {
  let i = 0;
  while (i < pq.length && pq[i] <= n) i++;
  pq.splice(i, 0, n);
}

for (const n of [3, 1, 2]) push(n);

const out: number[] = [];
while (pq.length > 0) {
  out.push(pq.shift()!);
}
console.log(out.join(" "));
