# 0479 — Loop

Uses [handlebars](https://github.com/handlebars-lang/handlebars.js) and its
`{{#each}}` block helper to iterate over a fixed array `nums = [1, 2, 3]`,
emitting each element with `{{this}}` followed by a newline so every number
lands on its own line. The template is a fixed string compiled and rendered by
the engine; the trailing newline is trimmed before printing.

## Run

    npx tsx main.ts
