# 0592 — Read an attribute

Uses the `fast-xml-parser` library to parse a fixed catalog document, then reads the `id` attribute of the first `<book>` element (with `ignoreAttributes: false` so attributes are kept) and prints it.

## Run

    npx tsx main.ts
