const grid: number[][] = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
const rows = grid.length;
const cols = grid[0].length;
const dp: number[][] = grid.map((row) => [...row]);
for (let c = 1; c < cols; c++) dp[0][c] += dp[0][c - 1];
for (let r = 1; r < rows; r++) dp[r][0] += dp[r - 1][0];
for (let r = 1; r < rows; r++) {
  for (let c = 1; c < cols; c++) {
    dp[r][c] += Math.min(dp[r - 1][c], dp[r][c - 1]);
  }
}
console.log(dp[rows - 1][cols - 1]);
