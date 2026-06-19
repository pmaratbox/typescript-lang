# 0613 — Encode null

Use the real `@msgpack/msgpack` library to MessagePack-encode `null`/nil and print the lowercase hex of the resulting bytes: `c0`. The nil value serializes to a single byte (`c0`).

## Run

    npx tsx main.ts
