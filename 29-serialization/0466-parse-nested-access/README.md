# 0466 — Parse & access nested

Uses the `zod` schema library together with the built-in `JSON.parse` to parse a
JSON string and read a deeply nested value. `JSON.parse` turns the string into a
plain object, then a `z.object` schema (with a nested `User` schema containing a
`z.array` of strings) validates it via `Data.parse`, returning a fully typed
value. The nested `user.name` and the first element of `user.roles` are then read
and printed.

## Run

    npx tsx main.ts
