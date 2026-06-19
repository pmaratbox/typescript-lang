# 0647 — Contains key

Use [lru-cache](https://github.com/isaacs/node-lru-cache) to build a strict-LRU `LRUCache<string, number>` with capacity 3. After `set("a", 1)`, the `has(key)` method reports membership without affecting recency: `has("a")` is `true` and `has("x")` is `false`. The two booleans print lowercase, space-joined.

## Run

    npx tsx main.ts
