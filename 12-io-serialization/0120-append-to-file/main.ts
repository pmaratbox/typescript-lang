import { writeFileSync, appendFileSync, readFileSync, unlinkSync } from "node:fs";

const path = "tofile.txt";
writeFileSync(path, "a\n");
appendFileSync(path, "b\n");
const lines = readFileSync(path, "utf8").split("\n").filter((l) => l.length > 0);
unlinkSync(path);
console.log(lines.join(" "));
