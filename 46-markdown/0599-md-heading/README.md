# 0599 — Heading

Renders the Markdown `# Hello` to HTML using the `markdown-it` library (constructed
with the `'commonmark'` preset). The library emits an `<h1>` element; we strip the
trailing newline it appends before printing.

## Run

    npx tsx main.ts
