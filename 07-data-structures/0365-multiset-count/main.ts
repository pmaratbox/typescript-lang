class MultisetCount<T> {
  private counts = new Map<T, number>();

  add(value: T): void {
    this.counts.set(value, (this.counts.get(value) ?? 0) + 1);
  }

  remove(value: T): void {
    const current = this.counts.get(value);
    if (current === undefined) return;
    if (current <= 1) this.counts.delete(value);
    else this.counts.set(value, current - 1);
  }

  count(value: T): number {
    return this.counts.get(value) ?? 0;
  }
}

const ms = new MultisetCount<number>();
ms.add(1);
ms.add(1);
ms.add(2);
const before = ms.count(1);
ms.remove(1);
const after = ms.count(1);
console.log(`${before} ${after}`);
