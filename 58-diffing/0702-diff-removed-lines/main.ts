// Removed line content using jsdiff's diffLines. Run: npx tsx main.ts
import { diffLines } from 'diff';

const a = 'apple\nbanana\ncherry\n';
const b = 'apple\nblueberry\ncherry\ndate\n';

let removed: string[] = [];
for (const part of diffLines(a, b)) {
  const lines = part.value.split('\n').filter((x) => x.length);
  if (part.removed) removed.push(...lines);
}

console.log(removed.join(','));
