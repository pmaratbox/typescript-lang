# 0589 — Extract table cells

Uses the **cheerio** HTML-parsing library to query a fixed table document. The CSS selector `td` matches every table cell; cheerio returns them in document (row-major) order, so we map each to its text and join the results with commas.

## Run

    npx tsx main.ts
