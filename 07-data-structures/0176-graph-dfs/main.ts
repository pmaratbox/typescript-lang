const graph: number[][] = [
  [1, 2],
  [0, 3],
  [0, 3],
  [1, 2],
];

const visited = new Set<number>();
const order: number[] = [];

function dfs(node: number): void {
  if (visited.has(node)) return;
  visited.add(node);
  order.push(node);
  for (const neighbor of graph[node]) {
    dfs(neighbor);
  }
}

dfs(0);
console.log(order.join(" "));
