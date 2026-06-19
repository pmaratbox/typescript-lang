// TypeScript — graphlib via tsx. Run: npx tsx main.ts
// graphlib is CommonJS — use default import then destructure:
import graphlib from 'graphlib';
const { Graph } = graphlib;

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

// Degree of node b = number of incident edges (graphlib: count of neighbors in an undirected graph).
const degree = (g.neighbors("b") ?? []).length;
console.log(degree);
