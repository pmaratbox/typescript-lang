import Papa from 'papaparse';

// Write two rows with papaparse's unparse (CSV writer).
const out = Papa.unparse([
  ["name", "age"],
  ["Alice", "30"],
]);

// papaparse may emit \r\n; normalize to \n and strip any trailing newline.
console.log(out.replace(/\r\n/g, "\n").replace(/\n+$/, ""));
