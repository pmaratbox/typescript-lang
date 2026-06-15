# 0464 — Optional field default

Parse a JSON string that is missing the `age` field into a typed object. This lesson uses the built-in `JSON.parse` to decode the string and the `zod` library's `z.object` schema with `z.number().default(0)`, so the absent `age` field is filled with the default value `0` during `Person.parse`. Fields are declared alphabetically (`age`/`name`) for canonical serialization, and it prints `name age`.

## Run

    npx tsx main.ts
