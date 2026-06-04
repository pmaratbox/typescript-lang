const rows = 3;
const cols = 3;
const dp: number[] = new Array(cols).fill(1);
for (let r = 1; r < rows; r++) {
  for (let c = 1; c < cols; c++) {
    dp[c] += dp[c - 1];
  }
}
console.log(dp[cols - 1]);
