// Count unchanged (equal) lines using jsdiff's diffLines. Run: npx tsx main.ts
import { diffLines } from 'diff';

const a = 'apple\nbanana\ncherry\n';
const b = 'apple\nblueberry\ncherry\ndate\n';

let unchanged = 0;
for (const part of diffLines(a, b)) {
  const lines = part.value.split('\n').filter((x) => x.length);
  if (!part.added && !part.removed) unchanged += lines.length;
}

console.log(unchanged);
