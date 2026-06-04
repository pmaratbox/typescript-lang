function isBipartite(n: number, edges: [number, number][]): boolean {
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const color = new Array<number>(n).fill(-1);
  for (let s = 0; s < n; s++) {
    if (color[s] !== -1) continue;
    color[s] = 0;
    const queue: number[] = [s];
    while (queue.length > 0) {
      const u = queue.shift()!;
      for (const v of adj[u]) {
        if (color[v] === -1) {
          color[v] = color[u] ^ 1;
          queue.push(v);
        } else if (color[v] === color[u]) {
          return false;
        }
      }
    }
  }
  return true;
}

const fourCycle: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 0]];
const triangle: [number, number][] = [[0, 1], [1, 2], [2, 0]];

const a = isBipartite(4, fourCycle) ? "yes" : "no";
const b = isBipartite(3, triangle) ? "yes" : "no";
console.log(`${a} ${b}`);
