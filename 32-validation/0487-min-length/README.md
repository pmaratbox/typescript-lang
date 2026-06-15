# 0487 — Minimum length

Uses [zod](https://github.com/colinhacks/zod) to validate an object against a
schema where `name` is declared with `z.string().min(3)` (a minimum-length
constraint). Validating `{name:'al', age:30}` fails because `'al'` is shorter
than 3 characters. `safeParse` collects all issues, and the output is the sorted,
lowercased failing field name(s) extracted from each issue's `path[0]` — never the
library's message text. Here that is `name`.

## Run

    npx tsx main.ts
