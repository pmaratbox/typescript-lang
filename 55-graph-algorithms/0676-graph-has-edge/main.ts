import graphlib from 'graphlib';
const { Graph } = graphlib;

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

const bc = g.hasEdge('b', 'c');
const ae = g.hasEdge('a', 'e');
console.log(`${bc} ${ae}`);
