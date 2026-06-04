const n = 4;
const adj: number[][] = [[1, 2], [3], [3], []];

const indeg = new Array<number>(n).fill(0);
for (const us of adj) for (const v of us) indeg[v]++;

const order: number[] = [];
const available: number[] = [];
for (let v = 0; v < n; v++) if (indeg[v] === 0) available.push(v);

while (available.length > 0) {
  available.sort((a, b) => a - b);
  const u = available.shift()!;
  order.push(u);
  for (const v of adj[u]) {
    if (--indeg[v] === 0) available.push(v);
  }
}

console.log(order.join(" "));
