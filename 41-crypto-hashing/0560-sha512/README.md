# 0560 — SHA-512

Compute the SHA-512 hash of the string `hello` using Node's built-in `node:crypto` library. `createHash('sha512')` builds the digest object, `.update('hello')` feeds in the input bytes, and `.digest('hex')` returns the 128-character lowercase hex digest.

## Run

    npx tsx main.ts
