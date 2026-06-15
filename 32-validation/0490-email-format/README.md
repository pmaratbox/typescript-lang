# 0490 — Email format

Uses [zod](https://zod.dev/) to validate an object against a schema where the
`email` field must be a syntactically valid email address (`z.string().email()`).
The input `{ email: 'not-an-email' }` fails that constraint, so `safeParse`
returns an error. The output is the failing field name(s) — extracted from the
validator's issues, lowercased, deduplicated and sorted — or `ok` if validation
passes. Library-specific message text is never printed.

## Run

    npx tsx main.ts
