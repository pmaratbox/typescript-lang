const graph: number[][] = [
  [1, 2],
  [0, 3],
  [0, 3],
  [1, 2],
];

function bfs(start: number): number[] {
  const visited = new Set<number>([start]);
  const order: number[] = [];
  const queue: number[] = [start];
  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return order;
}

console.log(bfs(0).join(" "));
