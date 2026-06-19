# 0644 — Recency promotion

Use [lru-cache](https://github.com/isaacs/node-lru-cache) to build a strict-LRU `LRUCache<string, number>` with capacity 3. After storing `a=1, b=2, c=3`, we `get("a")`, which promotes `a` to most-recently-used and leaves `b` as the least-recently-used entry. Inserting `d=4` overflows the capacity, so the cache evicts `b`. Looking up `a` then `b` prints `1 miss`: `a` survived thanks to its recent access, while the evicted `b` reports `miss`.

## Run

    npx tsx main.ts
