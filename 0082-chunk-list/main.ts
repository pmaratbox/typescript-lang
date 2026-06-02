const nums = [1, 2, 3, 4, 5, 6, 7];
const size = 3;
for (let i = 0; i < nums.length; i += size) {
  console.log(nums.slice(i, i + size).join(" "));
}
