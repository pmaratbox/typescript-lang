# 0641 — Put and get

Use [lru-cache](https://github.com/isaacs/node-lru-cache) to build a strict-LRU `LRUCache<string, number>` with capacity 3. We `set("a", 1)` to store a value, then `get("a")` retrieves it (a hit also promotes the key to most-recently-used). A present key prints its value, while a missing lookup would print `miss`; here the stored value `1` is returned.

## Run

    npx tsx main.ts
