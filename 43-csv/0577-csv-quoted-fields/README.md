# 0577 — Quoted CSV fields

Uses the **papaparse** library to parse the CSV `name,note\nAlice,"hello, world"\n`. The note field is wrapped in double quotes so its embedded comma is part of the value rather than a column separator. papaparse correctly keeps the quoted field intact, and the lesson prints the data row's note value `hello, world`.

## Run

    npx tsx main.ts
