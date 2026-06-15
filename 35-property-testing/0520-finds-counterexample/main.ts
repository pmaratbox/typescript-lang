// fast-check — fc.check runs the property silently and returns a result object
import fc from 'fast-check';

// A FALSE property: 'every non-negative integer is < 100'.
// fc.check generates inputs and detects the counterexample WITHOUT printing
// any falsifying-example/shrink report (unlike fc.assert, which throws and
// would surface a report). We inspect result.failed and print only `found`.
const res = fc.check(
  fc.property(fc.integer({ min: 0, max: 1000000 }), (n) => n < 100),
  { numRuns: 1000 },
);

console.log(res.failed ? 'found' : 'no-ce');
