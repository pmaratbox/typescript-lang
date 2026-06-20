// All lines added: diff an empty list against [x,y] using jsdiff's diffLines. Run: npx tsx main.ts
import { diffLines } from 'diff';

const a = '';
const b = 'x\ny\n';

let added: string[] = [];
for (const part of diffLines(a, b)) {
  const lines = part.value.split('\n').filter((x) => x.length);
  if (part.added) added.push(...lines);
}

console.log(added.length);
