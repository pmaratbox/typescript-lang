const items: ReadonlyArray<[number, number]> = [
  [2, 3],
  [3, 4],
  [4, 5],
];
const capacity = 5;
const dp: number[] = new Array(capacity + 1).fill(0);
for (const [weight, value] of items) {
  for (let c = capacity; c >= weight; c--) {
    dp[c] = Math.max(dp[c], dp[c - weight] + value);
  }
}
console.log(dp[capacity]);
