import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";
const rows = Papa.parse(data.trim(), { skipEmptyLines: true }).data as string[][];

// Skip the header row; join the first column (name) of each data row.
console.log(rows.slice(1).map(r => r[0]).join(","));
