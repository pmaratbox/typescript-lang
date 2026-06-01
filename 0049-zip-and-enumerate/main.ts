const letters = ["a", "b", "c"];
const nums = [1, 2, 3];
const pairs = letters.map((k, i) => `${k}=${nums[i]}`);
console.log(pairs.join(" "));
