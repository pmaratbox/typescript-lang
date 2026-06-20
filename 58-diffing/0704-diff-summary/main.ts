// Diff summary using jsdiff's diffLines. Run: npx tsx main.ts
import { diffLines } from 'diff';

const a = 'apple\nbanana\ncherry\n';
const b = 'apple\nblueberry\ncherry\ndate\n';

let added: string[] = [];
let removed: string[] = [];
let equal = 0;
for (const part of diffLines(a, b)) {
  const lines = part.value.split('\n').filter((x) => x.length);
  if (part.added) added.push(...lines);
  else if (part.removed) removed.push(...lines);
  else equal += lines.length;
}

console.log(`${added.length} ${removed.length} ${equal}`);
