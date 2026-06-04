type BinOp = (a: number, b: number) => number;

const table: Record<string, BinOp> = {
  add: (a, b) => a + b,
  mul: (a, b) => a * b,
};

console.log(`${table.add(3, 4)} ${table.mul(3, 4)}`);
