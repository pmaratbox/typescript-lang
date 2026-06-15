# 0467 — Field rename

Uses [zod](https://zod.dev) to validate a typed `Person` whose code field
`fullName` is mapped to the JSON key `full_name` via zod's `.transform`
rename feature, then the built-in `JSON.stringify` serializes the renamed,
single-key object to compact, space-free JSON.

## Run

    npx tsx main.ts
