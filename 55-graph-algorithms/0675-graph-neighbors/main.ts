// TypeScript — graphlib via tsx. Run: npx tsx main.ts
// graphlib is CommonJS — use default import then destructure:
import graphlib from 'graphlib';
const { Graph } = graphlib;

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

// Neighbors of node a (graphlib's library method), sorted for determinism.
const neighbors = (g.neighbors("a") ?? []).slice().sort();
console.log(neighbors.join(","));
