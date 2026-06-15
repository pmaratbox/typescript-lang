# 0559 — SHA-256

This lesson uses Node.js's built-in `node:crypto` library to compute the SHA-256 hash of the UTF-8 bytes of `'hello'`. `crypto.createHash('sha256')` creates the hash object, `.update(...)` feeds in the input, and `.digest('hex')` returns the deterministic 64-character lowercase hex digest.

## Run

    npx tsx main.ts
