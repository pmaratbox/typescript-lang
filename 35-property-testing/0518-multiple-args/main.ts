// fast-check — a property over TWO generated integer args, checked via fc.assert
import fc from 'fast-check';

// two generators (a, b) feed a 2-arg property: max(a,b) dominates both
fc.assert(
  fc.property(fc.integer(), fc.integer(), (a, b) => {
    const m = Math.max(a, b);
    return m >= a && m >= b;
  }),
  { numRuns: 100 },
);

console.log('passed');
