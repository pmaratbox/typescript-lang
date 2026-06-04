const nums: number[] = [2, 4, 6];
const allEven = nums.every((n) => n % 2 === 0);
const anyOdd = nums.some((n) => n % 2 !== 0);
console.log(`${allEven ? "yes" : "no"} ${anyOdd ? "yes" : "no"}`);
