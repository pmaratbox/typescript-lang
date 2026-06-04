function parseOrDefault(s: string, fallback: number): number {
  const n = Number.parseInt(s, 10);
  return Number.isNaN(n) ? fallback : n;
}

const a = parseOrDefault("42", 0);
const b = parseOrDefault("x", 0);

console.log(`${a} ${b}`);
