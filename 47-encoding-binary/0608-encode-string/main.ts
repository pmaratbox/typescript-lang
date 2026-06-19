import { encode } from '@msgpack/msgpack';

const hex = (v: unknown) => Buffer.from(encode(v)).toString('hex');

console.log(hex('hello')); // a5 (fixstr, len 5) + UTF-8 bytes
