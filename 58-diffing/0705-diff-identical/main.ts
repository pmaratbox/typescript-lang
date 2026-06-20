// TypeScript — diff via tsx. Run: npx tsx main.ts  (group package.json, @types/diff)
import { diffLines } from 'diff';

// Diff a list against itself: A -> A. No differences expected.
const a = "apple\nbanana\ncherry\n";
const b = a;

let added: string[] = [], removed: string[] = [];
for (const p of diffLines(a, b)) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.added) added.push(...lines);
  else if (p.removed) removed.push(...lines);
}

console.log(`${added.length} ${removed.length}`);  // 0 0
