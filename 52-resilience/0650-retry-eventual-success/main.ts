import pRetry from 'p-retry';

// Scripted failure sequence via a shared counter: fail once, then succeed.
let attempts = 0;

await pRetry(
  async () => {
    attempts++;
    if (attempts < 2) throw new Error('transient');
    return 'done';
  },
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 },
);

// p-retry actually drove the retries; `attempts` reflects the real total.
console.log(attempts); // 2
