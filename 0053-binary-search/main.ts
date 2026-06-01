const nums: number[] = [1, 3, 5, 7, 9];
const target = 7;

let lo = 0;
let hi = nums.length - 1;
let index = -1;
while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (nums[mid] === target) {
    index = mid;
    break;
  } else if (nums[mid] < target) {
    lo = mid + 1;
  } else {
    hi = mid - 1;
  }
}

console.log(`found ${target} at index ${index}`);
