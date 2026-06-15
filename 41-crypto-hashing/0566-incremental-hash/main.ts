import crypto from 'node:crypto';

const hasher = crypto.createHash('sha256');
hasher.update('foo', 'utf8');
hasher.update('bar', 'utf8');
const digest = hasher.digest('hex');
console.log(digest);
