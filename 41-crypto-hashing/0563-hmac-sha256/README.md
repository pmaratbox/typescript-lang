# 0563 — HMAC-SHA256

Uses Node's built-in `node:crypto` library to compute an HMAC-SHA256 over the fixed message `hello` with the key `key`. `crypto.createHmac('sha256', key)` builds the keyed hash, `.update()` feeds the message, and `.digest('hex')` emits the deterministic lowercase hex digest.

## Run

    npx tsx main.ts
