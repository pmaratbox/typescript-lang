// fast-check — fc.assert throws if the property is falsified; reaching the
// console.log means the library checked the property over many generated inputs.
import fc from 'fast-check';

fc.assert(
  fc.property(fc.integer(), fc.integer(), (a, b) => a + b === b + a),
  { numRuns: 100 },
);
console.log('passed');
