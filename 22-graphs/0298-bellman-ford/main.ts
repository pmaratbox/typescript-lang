type Edge = { from: number; to: number; w: number };

const edges: Edge[] = [
  { from: 0, to: 1, w: 1 },
  { from: 1, to: 2, w: -2 },
  { from: 0, to: 2, w: 4 },
];

function bellmanFord(start: number, n: number): number[] {
  const dist = new Array<number>(n).fill(Infinity);
  dist[start] = 0;
  for (let i = 0; i < n - 1; i++) {
    for (const { from, to, w } of edges) {
      if (dist[from] !== Infinity && dist[from] + w < dist[to]) {
        dist[to] = dist[from] + w;
      }
    }
  }
  return dist;
}

console.log(bellmanFord(0, 3).join(" "));
