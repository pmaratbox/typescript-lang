// fast-check — a precondition via .filter, checked programmatically with fc.assert
import fc from 'fast-check';

// precondition: only test positive integers (filter the generator)
const positiveInt = fc.integer().filter((n) => n > 0);

fc.assert(
  fc.property(positiveInt, (n) => n + 1 > n),
  { numRuns: 100 },
);

console.log('passed');
