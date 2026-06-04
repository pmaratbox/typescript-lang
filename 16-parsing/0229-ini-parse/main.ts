function parseIni(text: string): string[] {
  const out: string[] = [];
  let section = "";
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("[") && line.endsWith("]")) {
      section = line.slice(1, -1);
    } else {
      const eq = line.indexOf("=");
      const key = line.slice(0, eq);
      const value = line.slice(eq + 1);
      out.push(`${section}.${key}=${value}`);
    }
  }
  return out;
}

const ini = "[s]\nk=v";
console.log(parseIni(ini).join("\n"));
