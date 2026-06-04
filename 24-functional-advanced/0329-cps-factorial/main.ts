function factCps(n: number, k: (result: number) => number): number {
  return n === 0 ? k(1) : factCps(n - 1, (r) => k(n * r));
}

const id = (x: number): number => x;
console.log(factCps(5, id));
