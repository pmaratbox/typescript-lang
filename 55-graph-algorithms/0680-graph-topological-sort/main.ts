import graphlib from 'graphlib';
const { Graph, alg } = graphlib;

const g = new Graph({ directed: true });
const edges: [string, string][] = [
  ['a', 'b'],
  ['b', 'c'],
  ['a', 'c'],
  ['c', 'd'],
  ['d', 'e'],
];
edges.forEach(([u, v]) => g.setEdge(u, v));

const order = alg.topsort(g);
console.log(order.join(','));
