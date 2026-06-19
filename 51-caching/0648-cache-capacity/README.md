# 0648 — Capacity bound

Use the [lru-cache](https://github.com/isaacs/node-lru-cache) library with capacity `max: 3`. Putting four items (`a`, `b`, `c`, `d`) overflows the cache, so lru-cache evicts the least-recently-used key as each overflow happens. The cache's `size` never exceeds the configured capacity, so even after four insertions it reports `3`.

## Run

    npx tsx main.ts
