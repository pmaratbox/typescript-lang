# 0378 — Barrier Synchronization

Have 3 threads each arrive at a barrier before any proceeds, then print `all reached: 3`. Three real `worker_threads` share a `SharedArrayBuffer`; arrivals are counted with `Atomics.add` and the gate is released with `Atomics.wait`/`notify`.

## Run

    npx tsx main.ts
