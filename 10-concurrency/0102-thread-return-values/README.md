# 0102 — Threads Returning Values

Run two threads that compute the squares of 3 and 4, join them, and print the sum of their results `25`. Each async task returns a `number`, and `Promise.all` collects both results to sum.

## Run

    npx tsx main.ts
