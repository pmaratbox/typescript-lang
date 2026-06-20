// TypeScript — diff via tsx. Run: npx tsx main.ts  (group package.json, @types/diff)
import { diffLines } from 'diff';

const a = "apple\nbanana\ncherry\n";
const b = "apple\nblueberry\ncherry\ndate\n";

const added: string[] = [];
for (const p of diffLines(a, b)) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.added) added.push(...lines);
}

console.log(added.join(","));  // blueberry,date
