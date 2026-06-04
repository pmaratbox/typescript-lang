type Test = { name: string; fn: () => void };

function assert(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

const tests: Test[] = [
  { name: "addition", fn: () => assert(1 + 1 === 2, "math broke") },
  { name: "strings", fn: () => assert("a".toUpperCase() === "A", "case broke") },
  { name: "arrays", fn: () => assert([1, 2].length === 2, "length broke") },
];

let passed = 0;
let failed = 0;
for (const t of tests) {
  try {
    t.fn();
    passed++;
  } catch {
    failed++;
  }
}

console.log(`${passed} passed, ${failed} failed`);
