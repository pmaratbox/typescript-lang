const n = 5;
const adj: number[][] = Array.from({ length: n }, () => []);

function addEdge(u: number, v: number): void {
  adj[u].push(v);
  adj[v].push(u);
}

addEdge(0, 1);
addEdge(1, 2);
addEdge(3, 4);

const seen = new Array<boolean>(n).fill(false);

function bfs(start: number): void {
  const queue: number[] = [start];
  seen[start] = true;
  while (queue.length > 0) {
    const u = queue.shift()!;
    for (const v of adj[u]) {
      if (!seen[v]) {
        seen[v] = true;
        queue.push(v);
      }
    }
  }
}

let components = 0;
for (let v = 0; v < n; v++) {
  if (!seen[v]) {
    components++;
    bfs(v);
  }
}

console.log(components);
