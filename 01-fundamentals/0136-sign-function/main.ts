function sign(x: number): number {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}

console.log(`${sign(-5)} ${sign(0)} ${sign(5)}`);
