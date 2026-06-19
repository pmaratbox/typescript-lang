import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, number>({ max: 3 });
cache.set("a", 1);
cache.set("a", 2); // same key — updates the stored value

const value = cache.get("a");
console.log(value === undefined ? "miss" : String(value));
