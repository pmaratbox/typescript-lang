# 0565 — Base64 encode

Uses Node's built-in `node:buffer` API: a `Buffer` is created from the UTF-8 bytes of the fixed string `'hello'`, then `toString('base64')` applies the standard Base64 encoding to produce `aGVsbG8=`.

## Run

    npx tsx main.ts
