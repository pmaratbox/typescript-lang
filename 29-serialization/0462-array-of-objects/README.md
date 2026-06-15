# 0462 — Array of objects

Serializes a list of objects to a JSON array. A `zod` `z.object` schema validates
each `Person`, and `z.array` wraps it to validate the whole list; the validated
value is then serialized with the built-in `JSON.stringify`. Fields are declared
alphabetically (`age` before `name`) so the compact output keys come out in
alphabetical order.

## Run

    npx tsx main.ts
