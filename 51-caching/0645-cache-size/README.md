# 0645 — Cache size

Use [lru-cache](https://github.com/isaacs/node-lru-cache) to build a strict-LRU `LRUCache<string, number>` with capacity 5. After `set("a", 1)` and `set("b", 2)`, the cache holds two distinct entries, so its `size` property reports `2`. Because the capacity (5) exceeds the number of inserts, no eviction occurs and every entry is retained.

## Run

    npx tsx main.ts
