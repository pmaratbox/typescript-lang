const xs = [1, 2, 3, 4];
const pairs: string[] = [];
for (let i = 0; i + 1 < xs.length; i++) {
  pairs.push(`${xs[i]},${xs[i + 1]}`);
}
console.log(pairs.join(" "));
