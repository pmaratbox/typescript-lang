# 0491 — Multiple errors

Uses [zod](https://zod.dev/) to validate `{ name: 'al', age: 200 }` against a
schema requiring `name` to have a minimum length of 3 and `age` to fall within
`0..120`. Both constraints fail. Zod's `safeParse` collects every violation in
`error.issues` rather than stopping at the first, so we map each issue's
`path[0]` to its field name, lowercase, dedupe, and sort. The output is the
failing field name(s), one per line (`ok` if validation passes).

## Run

    npx tsx main.ts
