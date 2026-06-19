# 0610 — Encode an array

Use the real `@msgpack/msgpack` library to MessagePack-encode the array `[1, 2, 3]` and print the lowercase hex of the resulting bytes: `93010203`. A short array serializes to a fixarray header byte (`93` = array of 3) followed by each element as a positive fixint (`01 02 03`).

## Run

    npx tsx main.ts
