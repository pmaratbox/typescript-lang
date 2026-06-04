const rows: [string, string][] = [
  ["a", "1"],
  ["bb", "22"],
];

const width = Math.max(...rows.map(([c]) => c.length));

for (const [first, second] of rows) {
  console.log(`${first.padEnd(width)} | ${second}`);
}
