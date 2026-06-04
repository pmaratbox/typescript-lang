function attempt(n: number): boolean {
  return n >= 3;
}

let count = 0;
for (let i = 1; i <= 5; i++) {
  count = i;
  if (attempt(i)) break;
}

console.log(`ok after ${count}`);
