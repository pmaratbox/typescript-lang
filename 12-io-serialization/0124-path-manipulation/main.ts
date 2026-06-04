import { posix as path } from "node:path";

const joined = path.join("/tmp", "file.txt");
const base = path.basename(joined);
const ext = path.extname(joined);
console.log(`${joined} ${base} ${ext}`);
