# 0022 — Concurrency

Start two tasks that produce `1` and `2`, let them run concurrently, then join their results and print `sum: 3`. Same single-threaded, promise-based model as JavaScript: `Promise.all` fulfills once both promises fulfill — rejecting early if either rejects — and the result tuple is destructured. The `Promise<number>` return types are checked at compile time and erased at runtime.

## Run

    npx tsx main.ts
