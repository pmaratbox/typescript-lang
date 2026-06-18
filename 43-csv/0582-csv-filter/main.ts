// TypeScript — papaparse via tsx. Run: npx tsx main.ts  (group 43-csv/package.json present)
import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";
const rows = Papa.parse(data.trim(), { skipEmptyLines: true }).data as string[][];

const header = rows[0];
const nameIdx = header.indexOf("name");
const ageIdx = header.indexOf("age");

const kept = rows.slice(1).filter(r => Number(r[ageIdx]) > 28).map(r => r[nameIdx]);
console.log(kept.join(","));   // Alice,Carol
