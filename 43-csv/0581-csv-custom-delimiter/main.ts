import Papa from 'papaparse';

const data = "a;b;c\n1;2;3\n";

// Configure papaparse to use ';' as the field delimiter.
const rows = Papa.parse(data.trim(), { delimiter: ";", skipEmptyLines: true }).data as string[][];

// Take the second (data) row's fields and join them with commas.
console.log(rows[1].join(","));
