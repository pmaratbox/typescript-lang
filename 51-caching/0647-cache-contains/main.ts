import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, number>({ max: 3 });
cache.set("a", 1);

const hasA = cache.has("a");
const hasX = cache.has("x");
console.log(`${hasA} ${hasX}`);
