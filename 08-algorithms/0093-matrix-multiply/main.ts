const a = [[1, 2], [3, 4]];
const b = [[5, 6], [7, 8]];
const n = 2;
const result: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      result[i][j] += a[i][k] * b[k][j];
    }
  }
}

for (const row of result) {
  console.log(row.join(" "));
}
