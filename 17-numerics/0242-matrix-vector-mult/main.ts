function matVec(m: number[][], v: number[]): number[] {
  return m.map((row) => row.reduce((acc, x, j) => acc + x * v[j], 0));
}

const m = [
  [1, 2],
  [3, 4],
];
const v = [5, 6];
console.log(matVec(m, v).join(" "));
