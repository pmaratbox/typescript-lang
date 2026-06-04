type Edge = { to: number; w: number };

const adj: Edge[][] = [
  [{ to: 1, w: 4 }, { to: 2, w: 1 }],
  [{ to: 3, w: 1 }],
  [{ to: 1, w: 2 }, { to: 3, w: 5 }],
  [],
];

function shortestPath(start: number, goal: number, n: number): number[] {
  const dist = new Array<number>(n).fill(Infinity);
  const prev = new Array<number>(n).fill(-1);
  const visited = new Array<boolean>(n).fill(false);
  dist[start] = 0;
  for (let i = 0; i < n; i++) {
    let u = -1;
    for (let v = 0; v < n; v++) {
      if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
    }
    if (u === -1 || dist[u] === Infinity) break;
    visited[u] = true;
    for (const { to, w } of adj[u]) {
      if (dist[u] + w < dist[to]) {
        dist[to] = dist[u] + w;
        prev[to] = u;
      }
    }
  }
  const path: number[] = [];
  for (let at = goal; at !== -1; at = prev[at]) path.push(at);
  return path.reverse();
}

console.log(shortestPath(0, 3, 4).join(" "));
