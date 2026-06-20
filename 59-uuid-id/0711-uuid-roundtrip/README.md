# 0711 — Parse and format

Uses the `uuid` library's `parse` and `stringify` functions to round-trip a
UUID through its raw 16-byte representation. We `parse` the uppercase
`550E8400-E29B-41D4-A716-446655440000` into bytes, then `stringify` those bytes
back into a string — the library always produces the canonical lowercase form,
so the uppercase input is normalized to `550e8400-e29b-41d4-a716-446655440000`.

## Run

    npx tsx main.ts
