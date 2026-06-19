import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, number>({ max: 3 });
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);
cache.set("d", 4);

console.log(cache.size);
