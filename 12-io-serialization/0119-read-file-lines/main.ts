import { writeFileSync, readFileSync, unlinkSync } from "node:fs";

const path = "filelines.txt";
writeFileSync(path, "one\ntwo\nthree\n");
const lines = readFileSync(path, "utf8").split("\n").filter((l) => l.length > 0);
unlinkSync(path);
console.log(`lines: ${lines.length}`);
