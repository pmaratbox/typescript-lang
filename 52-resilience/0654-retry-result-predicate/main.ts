import pRetry from 'p-retry';

// Retry-on-result: the operation returns an incrementing counter, and we
// retry while the returned value is still below 3 (a result predicate, not
// an exception in the business logic). A shared counter scripts the sequence.
let counter = 0;

const accepted = await pRetry(
  async () => {
    const result = ++counter; // operation returns an incrementing value
    if (result < 3) {
      // Drive p-retry on the *result*: signal "not acceptable yet".
      throw new Error(`result ${result} < 3`);
    }
    return result; // accepted value
  },
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 },
);

// p-retry kept re-invoking until the result passed the predicate.
console.log(accepted); // 3
