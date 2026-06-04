const first: number[] = [1, 2, 3, 4];
const second: number[] = [2, 4];
const remove = new Set(second);
const diff = first.filter((n) => !remove.has(n));
console.log(diff.join(" "));
