const nums = [1, 2, 3, 4];
let total = 0;
const sums = nums.map((n) => (total += n));
console.log(sums.join(" "));
