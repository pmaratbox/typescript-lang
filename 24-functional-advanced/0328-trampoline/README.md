# 0328 — Trampoline

Sum 1..100 with a trampolined recursion that avoids deep stacks, printing `5050`. Each step returns a thunk that a driver loop unwinds iteratively.

## Run

    npx tsx main.ts
