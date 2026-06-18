# 0581 — Custom delimiter

This lesson uses the `papaparse` library to parse the semicolon-delimited text `a;b;c\n1;2;3\n` by configuring the parser's `delimiter` option to `';'`. The fields of the second (data) row are then joined with commas to print `1,2,3`.

## Run

    npx tsx main.ts
