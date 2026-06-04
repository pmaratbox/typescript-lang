function moves(n: number): number {
  return n === 0 ? 0 : 2 * moves(n - 1) + 1;
}

console.log(moves(3));
