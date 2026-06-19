# 0611 — Encode a nested array

Use the real `@msgpack/msgpack` library to MessagePack-encode the nested array `[[1, 2], [3, 4]]` and print the lowercase hex of the resulting bytes: `92920102920304`. The outer two-element array becomes a fixarray header `92`, and each inner array nests as its own `92` fixarray followed by its positive-fixint elements.

## Run

    npx tsx main.ts
