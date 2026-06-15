# 0463 — Array of primitives

Serializes a list of integers to a JSON array. A `zod` `z.array(z.number())`
schema validates the list of primitive numbers, and the validated value is then
serialized with the built-in `JSON.stringify`, which produces a compact array
with no extra whitespace.

## Run

    npx tsx main.ts
