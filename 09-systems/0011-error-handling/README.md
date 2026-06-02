# 0011 — Error Handling

Write a `divide(a, b)` that throws on a zero divisor, then call it on `10 / 2`
(prints the result) and `10 / 0` (prints an error). Same `throw` / `try` /
`catch` as JavaScript; the caught value is typed `unknown`, so it is narrowed
with `(e as Error)` to read `.message`.

## Run

    npx tsx main.ts
