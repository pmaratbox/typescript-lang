import pRetry from 'p-retry';

// Scripted failure sequence via a shared counter: fail the first 3 attempts,
// then succeed on the 4th.
let attempts = 0;

const result = await pRetry(
  async () => {
    attempts++;
    if (attempts < 4) throw new Error(`fail #${attempts}`);
    return 'done';
  },
  // EXPONENTIAL backoff: factor 2 doubles the delay each retry. Base delays are
  // kept at ~zero so the attempt count stays deterministic and the test is fast.
  { retries: 5, factor: 2, minTimeout: 0, maxTimeout: 0 },
);

void result;
console.log(attempts); // 4
