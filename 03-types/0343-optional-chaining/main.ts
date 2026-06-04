type Nested = { b?: { c?: number } };

const present: Nested = { b: { c: 5 } };
const absent: Nested = {};

console.log(`${present.b?.c ?? 0} ${absent.b?.c ?? 0}`);
