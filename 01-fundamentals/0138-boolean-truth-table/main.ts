const rows: [boolean, boolean][] = [
  [true, true],
  [true, false],
  [false, true],
  [false, false],
];

for (const [a, b] of rows) {
  console.log(`${a} ${b} ${a && b} ${a || b} ${a !== b}`);
}
