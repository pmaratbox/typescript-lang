# 0459 — Serialize an object

Uses [zod](https://zod.dev) to define and validate a typed `Person` schema, then
the built-in `JSON.stringify` to serialize the parsed object to a compact JSON
string. Fields are declared alphabetically (`age`, `name`) so the object's
insertion order yields alphabetically ordered, space-free JSON keys.

## Run

    npx tsx main.ts
