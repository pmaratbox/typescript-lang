const nums: number[] = [1, 2, 3, 4, 5];

const result = nums
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(`sum: ${result}`);
