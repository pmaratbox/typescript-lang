# 0382 — Fork-Join Sum

Recursively fork the sum of [1..8] into halves and join the partial sums, printing `36`. The range is split recursively and each half is awaited via `Promise.all` before adding the partial results.

## Run

    npx tsx main.ts
