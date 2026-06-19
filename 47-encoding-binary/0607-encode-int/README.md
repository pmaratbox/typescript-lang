# 0607 — Encode an integer

Use the real `@msgpack/msgpack` library to MessagePack-encode the integer `42` and print the lowercase hex of the resulting bytes: `2a`. Small non-negative integers serialize to a single positive-fixint byte equal to the value itself.

## Run

    npx tsx main.ts
