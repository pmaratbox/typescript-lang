# 0646 — Update a value

Use [lru-cache](https://github.com/isaacs/node-lru-cache) to build a strict-LRU `LRUCache<string, number>` with capacity 3. We `set("a", 1)`, then `set("a", 2)` with the same key — re-putting an existing key overwrites its value rather than adding a new entry. A following `get("a")` returns the updated value `2`.

## Run

    npx tsx main.ts
