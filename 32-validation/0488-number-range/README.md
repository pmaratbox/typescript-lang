# 0488 — Number range

Uses [zod](https://zod.dev/) to validate an object where `age` must be a number
between 0 and 120, expressed with `z.number().min(0).max(120)`. The input
`{ name: 'alice', age: 200 }` violates the upper bound, so `safeParse` returns a
failure result. The output is the failing field name(s): each issue's
`path[0]` is lowercased, deduped, and sorted, printing `age`.

## Run

    npx tsx main.ts
