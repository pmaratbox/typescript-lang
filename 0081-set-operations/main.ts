const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
const union = [...new Set([...a, ...b])].sort((x, y) => x - y);
const inter = [...a].filter((x) => b.has(x)).sort((x, y) => x - y);
console.log(union.join(" "));
console.log(inter.join(" "));
