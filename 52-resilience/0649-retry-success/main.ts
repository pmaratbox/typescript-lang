import pRetry from 'p-retry';

// Scripted failure sequence via a shared counter: this operation never
// fails, so p-retry succeeds on the very first attempt.
let attempts = 0;
await pRetry(
  async () => {
    attempts++;
    return 'done';
  },
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 },
);

console.log(attempts); // 1
