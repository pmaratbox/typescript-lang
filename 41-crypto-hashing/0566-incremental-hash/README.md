# 0566 — Incremental hashing

This lesson uses Node.js's built-in `node:crypto` library to compute a SHA-256 digest incrementally. `crypto.createHash('sha256')` creates the hash object, which is then fed the input across two separate `.update(...)` calls (`'foo'` then `'bar'`) before `.digest('hex')` finalizes it. The result is identical to hashing `'foobar'` in one shot, yielding the deterministic 64-character lowercase hex digest.

## Run

    npx tsx main.ts
