# 0468 — Scalar types

Uses [zod](https://zod.dev) to define and validate a typed schema of scalar
fields (`active:bool`, `count:int`, `label:string`), then the built-in
`JSON.stringify` to serialize the parsed object to a compact JSON string. Fields
are declared alphabetically so insertion order yields alphabetically ordered,
space-free JSON keys, and the boolean serializes as lowercase `true`.

## Run

    npx tsx main.ts
