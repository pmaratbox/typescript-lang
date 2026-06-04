const xs: number[] = [1, 2];
const ys: string[] = ["a", "b"];
const pairs: string[] = [];
for (const x of xs) {
  for (const y of ys) {
    pairs.push(`${x}${y}`);
  }
}
console.log(pairs.join(" "));
