const coins: number[] = [1, 2, 5];
const target = 5;
const dp: number[] = new Array(target + 1).fill(0);
dp[0] = 1;
for (const coin of coins) {
  for (let amount = coin; amount <= target; amount++) {
    dp[amount] += dp[amount - coin];
  }
}
console.log(dp[target]);
