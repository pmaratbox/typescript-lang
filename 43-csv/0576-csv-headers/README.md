# 0576 — CSV header row

Uses the **papaparse** library to parse the CSV `name,age,city\nAlice,30,Paris\n...`. It reads the header (first) row's fields and joins them with a pipe to print `name|age|city`.

## Run

    npx tsx main.ts
