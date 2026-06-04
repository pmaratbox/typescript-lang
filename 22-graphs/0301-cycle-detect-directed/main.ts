const n = 3;
const adj: number[][] = [[1], [2], [0]];

enum Color {
  White,
  Gray,
  Black,
}

const color = new Array<Color>(n).fill(Color.White);

function hasCycle(u: number): boolean {
  color[u] = Color.Gray;
  for (const v of adj[u]) {
    if (color[v] === Color.Gray) return true;
    if (color[v] === Color.White && hasCycle(v)) return true;
  }
  color[u] = Color.Black;
  return false;
}

let found = false;
for (let u = 0; u < n; u++) {
  if (color[u] === Color.White && hasCycle(u)) {
    found = true;
    break;
  }
}

console.log(found ? "cycle" : "acyclic");
