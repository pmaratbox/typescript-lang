function assertEqual<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

assertEqual(1 + 1, 2);
assertEqual("a" + "b", "ab");
assertEqual([1, 2, 3].length, 3);

console.log("all passed");
