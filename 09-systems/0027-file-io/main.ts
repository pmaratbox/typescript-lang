import { writeFileSync, readFileSync, unlinkSync } from "node:fs";

const path = "greeting.txt";
writeFileSync(path, "hello, file");
const content = readFileSync(path, "utf8");
unlinkSync(path);
console.log(`read: ${content}`);
