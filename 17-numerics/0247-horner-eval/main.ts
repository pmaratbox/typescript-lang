function horner(coeffs: number[], x: number): number {
  return coeffs.reduce((acc, c) => acc * x + c, 0);
}

// 2x^2 + 3x + 1, highest degree first
console.log(horner([2, 3, 1], 2));
