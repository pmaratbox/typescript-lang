import { encode } from '@msgpack/msgpack';

const hex = (v: unknown) => Buffer.from(encode(v)).toString('hex');

console.log(hex([1, 2, 3])); // 93010203 (fixarray 93 + 01 02 03)
