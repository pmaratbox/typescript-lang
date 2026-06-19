# 0612 — Encode a map

Use the real `@msgpack/msgpack` library to MessagePack-encode the single-key map `{"a": 1}` and print the lowercase hex of the resulting bytes: `81a16101`. A small map serializes to a fixmap header byte (`81` = map of 1 pair) followed by the key (`a161` = fixstr `"a"`) and the value (`01` = positive fixint).

## Run

    npx tsx main.ts
