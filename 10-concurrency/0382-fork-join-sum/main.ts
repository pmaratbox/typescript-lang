// Fork-join: recursively split the range into halves, compute each half
// concurrently (Promise.all = the "join"), then add the partial sums.
async function forkJoinSum(nums: number[]): Promise<number> {
  if (nums.length <= 1) return nums[0] ?? 0;
  const mid = nums.length >> 1;
  const [left, right] = await Promise.all([
    forkJoinSum(nums.slice(0, mid)),
    forkJoinSum(nums.slice(mid)),
  ]);
  return left + right;
}

forkJoinSum([1, 2, 3, 4, 5, 6, 7, 8]).then((total) => console.log(total));
