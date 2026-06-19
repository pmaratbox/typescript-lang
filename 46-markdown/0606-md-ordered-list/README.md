# 0606 — Ordered list

Renders the Markdown `1. a\n2. b` to HTML using the `markdown-it` library (constructed
with the `'commonmark'` preset). The library emits an `<ol>` element wrapping two `<li>`
items; we strip the trailing newline it appends before printing.

## Run

    npx tsx main.ts
