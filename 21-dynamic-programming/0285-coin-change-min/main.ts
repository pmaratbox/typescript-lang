const coins: number[] = [1, 2, 5];
const target = 11;
const dp: number[] = new Array(target + 1).fill(Infinity);
dp[0] = 0;
for (let amount = 1; amount <= target; amount++) {
  for (const coin of coins) {
    if (coin <= amount) {
      dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1);
    }
  }
}
console.log(dp[target]);
