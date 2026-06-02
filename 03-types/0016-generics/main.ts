function first<T>(items: T[]): T {
  return items[0];
}

const ints: number[] = [1, 2, 3];
const strs: string[] = ["a", "b", "c"];

console.log(`first int: ${first(ints)}`);
console.log(`first string: ${first(strs)}`);
