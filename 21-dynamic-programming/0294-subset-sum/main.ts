const nums: number[] = [3, 34, 4, 12, 5, 2];
const target = 9;
const dp: boolean[] = new Array(target + 1).fill(false);
dp[0] = true;
for (const num of nums) {
  for (let sum = target; sum >= num; sum--) {
    if (dp[sum - num]) dp[sum] = true;
  }
}
console.log(dp[target] ? "yes" : "no");
