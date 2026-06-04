const nums: number[] = [1, 5, 11, 5];
const total = nums.reduce((a, b) => a + b, 0);
if (total % 2 !== 0) {
  console.log("no");
} else {
  const target = total / 2;
  const dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let sum = target; sum >= num; sum--) {
      if (dp[sum - num]) dp[sum] = true;
    }
  }
  console.log(dp[target] ? "yes" : "no");
}
