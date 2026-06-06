# 0410 — Merge Streams

Implement merge of two timed streams using a virtual-time scheduler, interleaving them by emission time. A small `VirtualScheduler` class holds a `(time, seq, cb)` task list that `run()` drains in ascending order, so subscribing both timed sources onto one observer yields events in pure time order.

## Run

    npx tsx main.ts
