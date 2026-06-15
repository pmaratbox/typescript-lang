# 0562 — MD5

This lesson uses Node.js's built-in `node:crypto` library to compute the MD5 hash of the UTF-8 bytes of `'hello'`. `crypto.createHash('md5')` creates the hash object, `.update(...)` feeds in the input, and `.digest('hex')` returns the deterministic 32-character lowercase hex digest.

## Run

    npx tsx main.ts
