# 0588 — Descendant selector

Uses the **cheerio** HTML-parsing library to query a fixed HTML document. The descendant CSS selector `.content p` matches every `<p>` nested inside an element with class `content`; we map each matched paragraph to its text and join the results with commas to print `first,second`.

## Run

    npx tsx main.ts
