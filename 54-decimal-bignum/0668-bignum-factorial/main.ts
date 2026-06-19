// Compute 30! exactly using TypeScript's built-in arbitrary-precision BigInt.
function factorial(n: bigint): bigint {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(30n).toString());
