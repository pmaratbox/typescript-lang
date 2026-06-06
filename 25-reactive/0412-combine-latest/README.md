# 0412 — Combine Latest

Implement combineLatest of two timed streams, emitting the pair of latest values whenever either source emits (once both have emitted). A virtual-time scheduler picks the next task by `(time, seq)`, so timed emissions stay fully deterministic.

## Run

    npx tsx main.ts
