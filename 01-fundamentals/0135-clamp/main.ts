function clamp(x: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(x, hi));
}

console.log(`${clamp(15, 0, 10)} ${clamp(-3, 0, 10)}`);
