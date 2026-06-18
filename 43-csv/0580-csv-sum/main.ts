// TypeScript — papaparse via tsx. Run: npx tsx main.ts  (group 43-csv/package.json present)
import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";
const rows = Papa.parse(data.trim(), { skipEmptyLines: true }).data as string[][];

const header = rows[0];
const ageIdx = header.indexOf("age");
const total = rows.slice(1).reduce((sum, r) => sum + parseInt(r[ageIdx], 10), 0);
console.log(total);   // 30+25+35 -> 90
