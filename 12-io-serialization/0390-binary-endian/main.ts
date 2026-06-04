const value = 258;
const high = (value >> 8) & 0xff;
const low = value & 0xff;
const decoded = high * 256 + low;
console.log(`${high} ${low} ${decoded}`);
