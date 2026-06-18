// TypeScript — papaparse via tsx. Run: npx tsx main.ts
import Papa from 'papaparse';

const data = "name,note\nAlice,\"hello, world\"\n";
const rows = Papa.parse(data.trim(), { skipEmptyLines: true }).data as string[][];

// The quoted field contains a comma; papaparse keeps it as one field.
// Print the note (second column) of the data row.
const note = rows[1][1];
console.log(note);   // hello, world
