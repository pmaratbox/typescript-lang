import crypto from 'node:crypto';

console.log(crypto.createHmac('sha256', 'key').update('hello').digest('hex'));
