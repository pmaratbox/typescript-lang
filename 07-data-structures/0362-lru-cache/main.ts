class LruCache {
  private map = new Map<number, number>();
  constructor(private capacity: number) {}

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const value = this.map.get(key)!;
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      const lru = this.map.keys().next().value as number;
      this.map.delete(lru);
    }
  }
}

const cache = new LruCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
console.log(`${cache.get(1)} ${cache.get(2)}`);
