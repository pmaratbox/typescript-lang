# 0601 — Italic

Renders the Markdown `*italic*` to HTML using the `markdown-it` library (constructed
with the `'commonmark'` preset). The library emits an `<em>` element wrapped in a
paragraph; we strip the trailing newline it appends before printing.

## Run

    npx tsx main.ts
