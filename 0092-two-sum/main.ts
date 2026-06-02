const nums = [2, 7, 11, 15];
const target = 9;
const seen = new Map<number, number>();
for (let i = 0; i < nums.length; i++) {
  if (seen.has(target - nums[i])) {
    console.log(`${seen.get(target - nums[i])} ${i}`);
    break;
  }
  seen.set(nums[i], i);
}
