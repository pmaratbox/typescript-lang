import crypto from 'node:crypto';

const digest = crypto.createHash('sha256').update('hello', 'utf8').digest('hex');
console.log(digest);
