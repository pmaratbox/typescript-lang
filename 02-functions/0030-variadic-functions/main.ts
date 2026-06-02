function total(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(`sum: ${total(1, 2, 3)}`);
