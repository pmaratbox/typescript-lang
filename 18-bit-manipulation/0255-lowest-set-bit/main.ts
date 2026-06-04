const lowestSetBit = (x: number): number => x & -x;

console.log(lowestSetBit(12));
