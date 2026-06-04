# 0107 — Worker Pool

Distribute squaring of 1..4 across a pool of workers, collect the results, and print them sorted ascending `1 4 9 16`. A pool of two real `worker_threads` pulls tasks via `postMessage`; results are sorted since completion order is not deterministic.

## Run

    npx tsx main.ts
