const nums = [1, 2, 3, 4, 5];
const k = 2;
const rotated = nums.slice(k).concat(nums.slice(0, k));
console.log(rotated.join(" "));
