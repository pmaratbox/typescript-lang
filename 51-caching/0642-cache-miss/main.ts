import { LRUCache } from 'lru-cache';

// Strict-LRU cache from the `lru-cache` library, capacity 3.
const cache = new LRUCache<string, number>({ max: 3 });

// The cache is empty, so looking up `x` returns undefined (a cache miss).
const v = cache.get("x");
console.log(v === undefined ? "miss" : String(v));
