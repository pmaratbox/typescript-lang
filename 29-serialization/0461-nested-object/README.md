# 0461 — Nested object

Uses the `zod` schema library together with the built-in `JSON.stringify` to
serialize an object that contains another object. A `z.object` schema (`Address`)
is nested inside the outer `Person` schema; `Person.parse` validates and returns
the typed value, which `JSON.stringify` then renders as compact JSON. Fields are
declared alphabetically so the serialized keys come out in alphabetical order.

## Run

    npx tsx main.ts
