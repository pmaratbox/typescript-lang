import { LRUCache } from 'lru-cache';

const c = new LRUCache<string, number>({ max: 3 });

// Fill to capacity, then overflow. No gets between, so insertion order is recency order.
c.set("a", 1);
c.set("b", 2);
c.set("c", 3);
c.set("d", 4); // evicts the least-recently-used key: "a"

const a = c.get("a");
const d = c.get("d");

console.log(
  `${a === undefined ? "miss" : String(a)} ${d === undefined ? "miss" : String(d)}`,
);
