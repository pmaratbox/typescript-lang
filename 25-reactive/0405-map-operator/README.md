# 0405 — Map Operator

Implement a map operator that transforms each emitted value, applying x => x*2 to a stream of 1, 2, 3, 4. The operator wraps the source's subscribe and forwards `f(value)` through a typed `Observer<T>` closure.

## Run

    npx tsx main.ts
