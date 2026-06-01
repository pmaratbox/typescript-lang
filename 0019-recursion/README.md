# 0019 — Recursion

Define a recursive `factorial(n)` that multiplies `n` by `factorial(n - 1)` until it bottoms out at `1`, then print `factorial(5) = 120`. The `n: number` annotation is checked at compile time and erased at runtime, so the emitted JavaScript is identical to `javascript-lang`. Like JavaScript, it leans on the call stack with no guaranteed tail-call optimization.

## Run

    npx tsx main.ts
