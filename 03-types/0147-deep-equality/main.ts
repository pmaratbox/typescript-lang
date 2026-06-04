function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

const x = { p: { a: 1, b: 2 }, q: [3, 4] };
const y = { p: { a: 1, b: 2 }, q: [3, 4] };

console.log(`equal: ${deepEqual(x, y) ? "yes" : "no"}`);
