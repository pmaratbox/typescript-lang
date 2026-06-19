import { decode } from '@msgpack/msgpack';

const bytes = Buffer.from('a568656c6c6f', 'hex');

console.log(decode(bytes)); // fixstr a5 -> "hello"
