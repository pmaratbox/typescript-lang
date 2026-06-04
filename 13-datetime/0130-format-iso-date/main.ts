function pad(n: number): string {
  return String(n).padStart(2, "0");
}

const y = 2026;
const m = 6;
const d = 4;
console.log(`${y}-${pad(m)}-${pad(d)}`);
