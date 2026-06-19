// TypeScript — graphlib via tsx. Run: npx tsx main.ts
// graphlib is CommonJS — use default import then destructure:
import graphlib from 'graphlib';
const { Graph, alg } = graphlib;

// Fixed weighted UNDIRECTED graph G.
const g = new Graph({ directed: false });
const edges: [string, string, number][] = [
  ["a", "b", 1],
  ["a", "c", 4],
  ["b", "c", 1],
  ["b", "d", 5],
  ["c", "d", 1],
  ["d", "e", 1],
];
edges.forEach(([u, v, w]) => g.setEdge(u, v, w));

// Weighted shortest path a -> e via graphlib's Dijkstra.
// alg.dijkstra returns, per node, { distance, predecessor }.
const result = alg.dijkstra(g, "a", (e: any) => g.edge(e));

// Reconstruct the path by walking predecessors from e back to a.
const path: string[] = [];
let cur: string | undefined = "e";
while (cur !== undefined && cur !== "") {
  path.unshift(cur);
  const next: string = result[cur].predecessor;
  if (cur === "a") break;
  cur = next;
}

console.log(path.join("-"));
