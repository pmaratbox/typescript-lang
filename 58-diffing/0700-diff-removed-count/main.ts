// TypeScript — diff via tsx. Run: npx tsx main.ts  (group package.json, @types/diff)
import { diffLines } from 'diff';

const a = "apple\nbanana\ncherry\n";
const b = "apple\nblueberry\ncherry\ndate\n";

let added: string[] = [], removed: string[] = [], equal = 0;
for (const p of diffLines(a, b)) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.added) added.push(...lines);
  else if (p.removed) removed.push(...lines);
  else equal += lines.length;
}

console.log(removed.length);  // 1
