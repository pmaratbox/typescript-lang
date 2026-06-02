# 0031 — Type Conversion & Parsing

Parse the string `"42"` into an integer and `"3.5"` into a float, then convert the integer back to a string, printing `int: 42`, `float: 3.5`, and `str: 42`. The same `parseInt`/`parseFloat`/`String` calls as JavaScript, annotated as `number`/`string`. The annotations are compile-time only — a runtime `NaN` is still typed `number`, so parsing failures are not caught by the type system.

## Run

    npx tsx main.ts
