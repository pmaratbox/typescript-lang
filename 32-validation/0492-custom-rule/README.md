# 0492 — Custom rule

Uses [zod](https://github.com/colinhacks/zod) with `z.object` and a custom
`.refine()` rule requiring `password` to contain at least one digit. Validating
`{ password: 'abcdef' }` fails the refinement because the value has no digit, so
`safeParse` returns a failure. The output is the failing field name(s): each
issue's `path[0]` is collected, de-duplicated, lowercased and sorted, then
printed one per line (or `ok` if validation passes). No library-specific message
text is printed.

## Run

    npx tsx main.ts
