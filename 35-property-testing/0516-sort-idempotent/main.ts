// fast-check — fc.assert + fc.property over fc.array(fc.integer())
import fc from 'fast-check';

const sort = (xs: number[]): number[] => [...xs].sort((a, b) => a - b);

fc.assert(
  fc.property(fc.array(fc.integer()), (xs) => {
    const once = sort(xs);
    const twice = sort(once);
    return JSON.stringify(twice) === JSON.stringify(once);
  }),
  { numRuns: 100 },
);

console.log('passed');
