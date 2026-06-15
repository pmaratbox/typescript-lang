// fast-check — a CUSTOM generator built with .map, checked via fc.assert
import fc from 'fast-check';

// custom generator: even integers, via map combinator (n -> n * 2)
const evenInt = fc.integer().map((n) => n * 2);

fc.assert(
  fc.property(evenInt, (n) => n % 2 === 0),
  { numRuns: 100 },
);

console.log('passed');
