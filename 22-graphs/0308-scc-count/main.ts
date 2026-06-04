const n = 4;
const adj: number[][] = [[1], [2], [0, 3], []];

let index = 0;
const idx = new Array<number>(n).fill(-1);
const low = new Array<number>(n).fill(0);
const onStack = new Array<boolean>(n).fill(false);
const stack: number[] = [];
let sccCount = 0;

function strongconnect(u: number): void {
  idx[u] = index;
  low[u] = index;
  index++;
  stack.push(u);
  onStack[u] = true;

  for (const v of adj[u]) {
    if (idx[v] === -1) {
      strongconnect(v);
      low[u] = Math.min(low[u], low[v]);
    } else if (onStack[v]) {
      low[u] = Math.min(low[u], idx[v]);
    }
  }

  if (low[u] === idx[u]) {
    sccCount++;
    let w: number;
    do {
      w = stack.pop()!;
      onStack[w] = false;
    } while (w !== u);
  }
}

for (let u = 0; u < n; u++) {
  if (idx[u] === -1) strongconnect(u);
}

console.log(sccCount);
