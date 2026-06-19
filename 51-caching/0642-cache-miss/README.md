# 0642 — Cache miss

Uses the `lru-cache` library's `LRUCache` (a strict LRU cache, capacity 3).
Looking up a key that was never stored returns `undefined` — a cache miss —
which we report by printing `miss`.

## Run

    npx tsx main.ts
