class TooLargeError extends Error {}

function check(n: number): void {
  if (n > 100) {
    throw new TooLargeError("value too large");
  }
}

try {
  check(200);
} catch (e) {
  if (e instanceof TooLargeError) {
    console.log(`error: ${e.message}`);
  }
}
