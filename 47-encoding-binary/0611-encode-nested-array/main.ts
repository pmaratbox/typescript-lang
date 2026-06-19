import { encode } from '@msgpack/msgpack';

const hex = (v: unknown) => Buffer.from(encode(v)).toString('hex');

console.log(hex([[1, 2], [3, 4]])); // 92920102920304 (fixarray of two fixarrays)
