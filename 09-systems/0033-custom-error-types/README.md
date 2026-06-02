# 0033 — Custom Error Types

Define a custom error, raise it from a `check` that rejects values over `100`, catch it for the input `200`, and print `error: value too large`. Same `extends Error` and `throw` as JavaScript, but the `catch` binding is typed `unknown`, so an `instanceof TooLargeError` narrows it before `e.message` is accessible — the type system forces the check.

## Run

    npx tsx main.ts
