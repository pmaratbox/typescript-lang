# 0485 — Valid input

Uses [zod](https://zod.dev/) to define an object schema for
`{ name: string (min 3), age: int (0..120) }` and validate the input
`{ name: 'alice', age: 30 }`. The `name` constraint requires at least 3
characters and `age` must be an integer in `0..120`; this input satisfies both,
so validation passes. On failure the output would be the sorted, lowercased
failing field name(s) (one per line) extracted from `safeParse`'s error
`issues[].path`; here it passes, so the output is `ok`.

## Run

    npx tsx main.ts
