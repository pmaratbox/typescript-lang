const isPowerOfTwo = (n: number): boolean => n > 0 && (n & (n - 1)) === 0;

const label = (b: boolean): string => (b ? "yes" : "no");
console.log(`${label(isPowerOfTwo(16))} ${label(isPowerOfTwo(18))}`);
