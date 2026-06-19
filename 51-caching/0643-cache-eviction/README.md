# 0643 — LRU eviction

Use the [lru-cache](https://github.com/isaacs/node-lru-cache) library with capacity `max: 3`. The keys `a`, `b`, `c`, `d` are inserted with no lookups in between, so recency follows insertion order. Inserting `d` overflows the cache and lru-cache evicts the least-recently-used key, `a`. Looking up `a` returns `undefined` (printed as `miss`), while `d` is still present and returns `4`.

## Run

    npx tsx main.ts
