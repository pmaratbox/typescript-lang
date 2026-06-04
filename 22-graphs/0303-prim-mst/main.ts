const n = 4;
const adj: { to: number; w: number }[][] = Array.from({ length: n }, () => []);

function addEdge(u: number, v: number, w: number): void {
  adj[u].push({ to: v, w });
  adj[v].push({ to: u, w });
}

addEdge(0, 1, 1);
addEdge(1, 2, 2);
addEdge(2, 3, 3);

const inTree = new Array<boolean>(n).fill(false);
const key = new Array<number>(n).fill(Infinity);
key[0] = 0;
let total = 0;

for (let i = 0; i < n; i++) {
  let u = -1;
  for (let v = 0; v < n; v++) {
    if (!inTree[v] && (u === -1 || key[v] < key[u])) u = v;
  }
  inTree[u] = true;
  total += key[u];
  for (const { to, w } of adj[u]) {
    if (!inTree[to] && w < key[to]) key[to] = w;
  }
}

console.log(total);
