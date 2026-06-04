# 0380 — Compare-And-Swap Loop

Increment a shared value to 100 using a CAS retry loop from multiple threads, printing `100`. Ten real `worker_threads` share a `SharedArrayBuffer` and commit each increment with an `Atomics.compareExchange` retry loop.

## Run

    npx tsx main.ts
