// graphlib (CommonJS) via tsx. Build the fixed weighted undirected graph G
// and print its node and edge counts using the library's own counters.
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

console.log(g.nodeCount(), g.edgeCount());
