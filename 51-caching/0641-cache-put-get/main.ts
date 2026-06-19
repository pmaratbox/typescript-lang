import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, number>({ max: 3 });
cache.set("a", 1);

const value = cache.get("a");
console.log(value === undefined ? "miss" : String(value));
