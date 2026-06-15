import crypto from 'node:crypto';

const derived = crypto.pbkdf2Sync('password', 'salt', 1000, 32, 'sha256');
console.log(derived.toString('hex'));
