const scores: Record<string, number> = { a: 3, b: 1, c: 2 };
const sorted = Object.entries(scores).sort((x, y) => x[1] - y[1]);
console.log(sorted.map(([k, v]) => `${k}:${v}`).join(" "));
