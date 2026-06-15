# 0489 — Maximum length

Uses [zod](https://github.com/colinhacks/zod) with `z.object` and a
`z.string().max(5)` constraint to validate `{ code: 'ABCDEFG' }`. The string
exceeds the maximum length of 5, so `safeParse` returns a failure. The output is
the failing field name(s): each issue's `path[0]` is collected, de-duplicated,
lowercased and sorted, then printed one per line (or `ok` if validation passes).
No library-specific message text is printed.

## Run

    npx tsx main.ts
