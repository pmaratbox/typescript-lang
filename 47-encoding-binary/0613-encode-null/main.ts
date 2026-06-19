import { encode } from '@msgpack/msgpack';

const hex = (v: unknown) => Buffer.from(encode(v)).toString('hex');

console.log(hex(null)); // c0 (nil)
