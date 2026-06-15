# 0486 — Required field

Uses the **zod** validation library. The schema (`z.object`) requires both `name` and `age`; the input omits `age`, so zod reports a required-field violation for it. We `safeParse`, then extract the failing field name(s) from `error.issues` via each issue's `path[0]`, lowercase, dedupe, and sort. The output is the failing field name(s), one per line, or `ok` if validation passes.

## Run

    npx tsx main.ts
