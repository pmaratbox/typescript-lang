const nums: number[] = [1, 2, 3, 4, 1];
const result: number[] = [];
for (const n of nums) {
  if (n >= 3) break;
  result.push(n);
}
console.log(result.join(" "));
