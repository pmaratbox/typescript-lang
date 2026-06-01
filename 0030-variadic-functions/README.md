# 0030 — Variadic Functions

Define a function that accepts a variable number of integer arguments and returns their total, then call it with `1, 2, 3` to print `sum: 6`. The rest parameter is typed as `...nums: number[]`, so the call is checked at compile time. At runtime it behaves exactly like the JavaScript version — a true array reduced with `reduce`.

## Run

    npx tsx main.ts
