// TypeScript — papaparse via tsx. Run: npx tsx main.ts  (group 43-csv/package.json present)
import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";
const rows = Papa.parse(data.trim(), { skipEmptyLines: true }).data as string[][];

const header = rows[0];
const ageIdx = header.indexOf("age");
console.log(rows.slice(1).map(r => r[ageIdx]).join(","));   // 30,25,35
