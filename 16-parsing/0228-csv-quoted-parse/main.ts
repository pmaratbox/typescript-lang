function parseCsvRow(row: string): string[] {
  const fields: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (const ch of row) {
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      fields.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  fields.push(cur);
  return fields;
}

console.log(parseCsvRow('a,"b,c",d').join("|"));
