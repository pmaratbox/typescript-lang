const xs = [1, 2, 3];
const sub = (a: number, b: number): number => a - b;

const foldl = xs.reduce((acc, x) => sub(acc, x), 0);
const foldr = xs.reduceRight((acc, x) => sub(x, acc), 0);

console.log(`${foldl} ${foldr}`);
