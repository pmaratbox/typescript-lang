# 0608 — Encode a string

Use the real `@msgpack/msgpack` library to MessagePack-encode the string `"hello"` and print the lowercase hex of the resulting bytes: `a568656c6c6f`. Short strings serialize as a fixstr header byte (`a5` = `0xa0 | length`) followed by the raw UTF-8 bytes.

## Run

    npx tsx main.ts
