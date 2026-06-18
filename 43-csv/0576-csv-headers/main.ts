// TypeScript — papaparse via tsx. Run: npx tsx main.ts
import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";
const rows = Papa.parse(data.trim(), { skipEmptyLines: true }).data as string[][];

// Read the header (first) row's fields and join them with a pipe.
const header = rows[0];
console.log(header.join("|"));   // name|age|city
