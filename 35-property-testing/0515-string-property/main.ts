// fast-check — fc.assert (throws on fail) checks the property over generated strings
import fc from 'fast-check';

fc.assert(
  fc.property(fc.string(), (s) => {
    return (s + s).length === 2 * s.length;
  }),
  { numRuns: 100 },
);
console.log('passed');
