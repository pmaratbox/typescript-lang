import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, number>({ max: 3 });

cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);

// A get promotes "a" to most-recently-used, so "b" becomes the LRU.
cache.get("a");

// Inserting a 4th key evicts the LRU entry ("b").
cache.set("d", 4);

const fmt = (v: number | undefined): string => v === undefined ? "miss" : String(v);

console.log(`${fmt(cache.get("a"))} ${fmt(cache.get("b"))}`);
