const nums: number[] = [10, 9, 2, 5, 3, 7, 101, 18];
const dp: number[] = new Array(nums.length).fill(1);
for (let i = 1; i < nums.length; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[j] < nums[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(Math.max(...dp));
