const nums = [4, 2, 7, 1, 9];
const target = 7;
let index = -1;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === target) {
    index = i;
    break;
  }
}
console.log(`found ${target} at index ${index}`);
