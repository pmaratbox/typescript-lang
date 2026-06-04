# 0103 — Mutex-Protected Counter

Have multiple threads each increment a shared counter under a mutex so the total is exactly `1000`. Ten real `worker_threads` share a `SharedArrayBuffer`; a spinlock built from `Atomics.compareExchange`/`wait`/`notify` is the mutex around the non-atomic increment.

## Run

    npx tsx main.ts
