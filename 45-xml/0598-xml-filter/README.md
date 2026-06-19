# 0598 — Filter books by attribute

Uses the **fast-xml-parser** library to parse a fixed catalog document. Each `<book>` element is filtered by its `lang` attribute, keeping only those equal to `en` (just `b1`), then their `<title>` text is collected and joined with commas to print `Go`.

## Run

    npx tsx main.ts
