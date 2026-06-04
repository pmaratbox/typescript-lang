const r = 1;
const g = 2;
const b = 3;

const packed = (r << 16) | (g << 8) | b;

const ur = (packed >> 16) & 0xff;
const ug = (packed >> 8) & 0xff;
const ub = packed & 0xff;

console.log(`${ur} ${ug} ${ub}`);
