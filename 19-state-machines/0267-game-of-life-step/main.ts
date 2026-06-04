type Grid = number[][];

const grid: Grid = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

const liveNeighbors = (g: Grid, r: number, c: number): number => {
  let count = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < g.length && nc >= 0 && nc < g[nr].length) {
        count += g[nr][nc];
      }
    }
  }
  return count;
};

const step = (g: Grid): Grid =>
  g.map((row, r) =>
    row.map((cell, c) => {
      const n = liveNeighbors(g, r, c);
      return cell === 1 ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 1 : 0;
    })
  );

const next = step(grid);
console.log(next.map((row) => row.map((c) => (c ? "#" : ".")).join("")).join("\n"));
