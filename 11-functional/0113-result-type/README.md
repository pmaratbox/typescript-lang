# 0113 — Result / Either Type

Model success and failure with a Result type: safeDiv(10,2) prints `ok: 5` and safeDiv(1,0) prints `err: divide by zero`. A discriminated union with an `ok`/`err` tag is pattern-matched on its `kind` field.

## Run

    npx tsx main.ts
