type Cell = { r: number; c: number };

const N = 3;
const start: Cell = { r: 0, c: 0 };
const goal: Cell = { r: 2, c: 2 };

const h = (a: Cell, b: Cell): number => Math.abs(a.r - b.r) + Math.abs(a.c - b.c);
const key = (a: Cell): number => a.r * N + a.c;

function astar(): number {
  const g = new Map<number, number>();
  g.set(key(start), 0);
  const open: Cell[] = [start];
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (open.length > 0) {
    let bi = 0;
    for (let i = 1; i < open.length; i++) {
      const f = g.get(key(open[i]))! + h(open[i], goal);
      const bf = g.get(key(open[bi]))! + h(open[bi], goal);
      if (f < bf) bi = i;
    }
    const cur = open.splice(bi, 1)[0];
    if (cur.r === goal.r && cur.c === goal.c) return g.get(key(cur))!;
    for (const [dr, dc] of dirs) {
      const nr = cur.r + dr;
      const nc = cur.c + dc;
      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
      const next: Cell = { r: nr, c: nc };
      const ng = g.get(key(cur))! + 1;
      if (ng < (g.get(key(next)) ?? Infinity)) {
        g.set(key(next), ng);
        open.push(next);
      }
    }
  }
  return -1;
}

console.log(astar());
