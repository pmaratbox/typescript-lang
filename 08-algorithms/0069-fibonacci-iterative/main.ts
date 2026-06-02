let a = 0;
let b = 1;
const nums: number[] = [];
for (let i = 0; i < 7; i++) {
  nums.push(a);
  [a, b] = [b, a + b];
}
console.log(nums.join(" "));
