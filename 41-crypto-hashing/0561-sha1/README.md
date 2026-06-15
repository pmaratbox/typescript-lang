# 0561 — SHA-1

This lesson uses Node.js's built-in `node:crypto` library to compute the SHA-1 hash of the UTF-8 bytes of `'hello'`. `crypto.createHash('sha1')` creates the hash object, `.update(...)` feeds in the input, and `.digest('hex')` returns the deterministic 40-character lowercase hex digest. SHA-1 is legacy and should not be used for new security-sensitive work, but it is still useful for understanding hashing.

## Run

    npx tsx main.ts
