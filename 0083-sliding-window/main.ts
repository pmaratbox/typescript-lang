const nums = [1, 2, 3, 4];
const size = 2;
for (let i = 0; i + size <= nums.length; i++) {
  console.log(nums.slice(i, i + size).join(" "));
}
