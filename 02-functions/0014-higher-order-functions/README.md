# 0014 — Higher-Order Functions

Write `apply(f, x)` that calls the function `f` on `x`, then pass it two
different functions, `inc` and `double`. The parameter `f` is typed
`(x: number) => number` — a function type — so the compiler checks that what you
pass is callable with the right shape.

## Run

    npx tsx main.ts
