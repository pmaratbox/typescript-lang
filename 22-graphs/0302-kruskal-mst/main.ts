type Edge = { u: number; v: number; w: number };

const edges: Edge[] = [
  { u: 0, v: 1, w: 1 },
  { u: 1, v: 2, w: 2 },
  { u: 0, v: 2, w: 3 },
];

const n = 3;
const parent = Array.from({ length: n }, (_, i) => i);

function find(x: number): number {
  while (parent[x] !== x) {
    parent[x] = parent[parent[x]];
    x = parent[x];
  }
  return x;
}

function union(a: number, b: number): boolean {
  const ra = find(a);
  const rb = find(b);
  if (ra === rb) return false;
  parent[ra] = rb;
  return true;
}

let total = 0;
for (const { u, v, w } of [...edges].sort((a, b) => a.w - b.w)) {
  if (union(u, v)) total += w;
}

console.log(total);
