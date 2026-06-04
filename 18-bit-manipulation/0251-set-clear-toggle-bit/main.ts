const pos = 1;
const setBit = (x: number, p: number): number => x | (1 << p);
const clearBit = (x: number, p: number): number => x & ~(1 << p);
const toggleBit = (x: number, p: number): number => x ^ (1 << p);

const a = setBit(0, pos);
const b = clearBit(2, pos);
const c = toggleBit(0, pos);
console.log(`${a} ${b} ${c}`);
