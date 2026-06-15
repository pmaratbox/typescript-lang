// fast-check — fc.assert + fc.property over fc.array(fc.integer())
import fc from 'fast-check';

fc.assert(
  fc.property(fc.array(fc.integer()), (xs) => {
    const r = [...xs].reverse().reverse();
    return JSON.stringify(r) === JSON.stringify(xs);
  }),
  { numRuns: 100 },
);

console.log('passed');
