// TypeScript — graphlib via tsx. Run: npx tsx main.ts
// graphlib is CommonJS — use default import then destructure:
import graphlib from 'graphlib';
const { Graph, alg } = graphlib;

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

// Weighted shortest-path distance from a to e via Dijkstra's algorithm.
// The unique shortest path is a-b-c-d-e with total cost 4.
const result = alg.dijkstra(g, "a", (e: any) => g.edge(e));
console.log(result["e"].distance);
