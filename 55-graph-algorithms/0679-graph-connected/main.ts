import graphlib from 'graphlib';
const { Graph, alg } = graphlib;

const g = new Graph({ directed: false });
const edges: [string, string, number][] = [
  ['a', 'b', 1],
  ['a', 'c', 4],
  ['b', 'c', 1],
  ['b', 'd', 5],
  ['c', 'd', 1],
  ['d', 'e', 1],
];
edges.forEach(([u, v, w]) => g.setEdge(u, v, w));

// Two nodes are connected iff they fall in the same connected component.
const components: string[][] = alg.components(g);
const connected = components.some((c) => c.includes('a') && c.includes('e'));
console.log(connected);
