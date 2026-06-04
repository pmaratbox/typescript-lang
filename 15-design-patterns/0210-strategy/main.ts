type Strategy = (a: number, b: number) => number;

const strategies: Record<string, Strategy> = {
  add: (a, b) => a + b,
  mul: (a, b) => a * b,
};

const r1 = strategies["add"](3, 4);
const r2 = strategies["mul"](3, 4);
console.log(`${r1} ${r2}`);
