# 0460 — Deserialize an object

Parse a JSON string into a typed object. This lesson uses the built-in `JSON.parse` to decode the string and the `zod` library's `z.object` schema (with alphabetically declared `age`/`name` fields) to validate and type the result via `Person.parse`, then prints `name age`.

## Run

    npx tsx main.ts
