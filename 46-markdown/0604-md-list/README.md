# 0604 — Unordered list

Uses the `markdown-it` library (constructed with the `commonmark` preset) to render the Markdown `- a\n- b` to HTML. The trailing newline that the renderer appends is stripped before printing, producing a `<ul>` containing two `<li>` items.

## Run

    npx tsx main.ts
