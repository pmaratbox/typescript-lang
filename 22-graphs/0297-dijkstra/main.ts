type Edge = { to: number; w: number };

const adj: Edge[][] = [
  [{ to: 1, w: 4 }, { to: 2, w: 1 }],
  [{ to: 3, w: 1 }],
  [{ to: 1, w: 2 }, { to: 3, w: 5 }],
  [],
];

function dijkstra(start: number, n: number): number[] {
  const dist = new Array<number>(n).fill(Infinity);
  dist[start] = 0;
  const visited = new Array<boolean>(n).fill(false);
  for (let i = 0; i < n; i++) {
    let u = -1;
    for (let v = 0; v < n; v++) {
      if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
    }
    if (u === -1 || dist[u] === Infinity) break;
    visited[u] = true;
    for (const { to, w } of adj[u]) {
      if (dist[u] + w < dist[to]) dist[to] = dist[u] + w;
    }
  }
  return dist;
}

console.log(dijkstra(0, 4).join(" "));
