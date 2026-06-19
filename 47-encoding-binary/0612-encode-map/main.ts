import { encode } from '@msgpack/msgpack';

const hex = (v: unknown) => Buffer.from(encode(v)).toString('hex');

console.log(hex({ a: 1 })); // 81a16101 (fixmap 81 + key a161 + value 01)
