# 0614 — Decode bytes

Use the real `@msgpack/msgpack` library to MessagePack-decode the bytes from the hex string `a568656c6c6f` back into a value and print it: `hello`. The leading `a5` is a fixstr header (`0xa0 | length` for length 5), and the remaining bytes are the raw UTF-8 string `hello`.

## Run

    npx tsx main.ts
