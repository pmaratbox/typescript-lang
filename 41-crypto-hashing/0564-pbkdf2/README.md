# 0564 — PBKDF2

This lesson uses Node.js's built-in `node:crypto` library to derive a 32-byte key with PBKDF2-HMAC-SHA256 from the password `'password'` and salt `'salt'` using 1000 iterations. `crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)` returns the deterministic derived key as a `Buffer`, which `.toString('hex')` renders as a lowercase hex string.

## Run

    npx tsx main.ts
