# 0411 — Concat Streams

Implement concat: subscribe to the second source only after the first completes; concat [1,2] then [3,4]. In TypeScript an Observable is just a typed function taking an Observer with `next`/`complete` callbacks, so concat chains the second subscription inside the first's `complete`.

## Run

    npx tsx main.ts
