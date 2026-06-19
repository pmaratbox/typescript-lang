import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, number>({ max: 5 });
cache.set("a", 1);
cache.set("b", 2);

console.log(cache.size);
