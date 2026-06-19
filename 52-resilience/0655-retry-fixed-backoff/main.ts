import pRetry from 'p-retry';

// Scripted failure sequence via a shared counter: fail twice, then succeed.
let attempts = 0;

// Fixed backoff: a constant delay between attempts (factor 1 => no growth).
// minTimeout === maxTimeout keeps every wait identical; ~1ms stays deterministic.
await pRetry(
  async () => {
    attempts++;
    if (attempts < 3) throw new Error('transient');
    return 'done';
  },
  { retries: 4, factor: 1, minTimeout: 1, maxTimeout: 1 },
);

// p-retry actually drove the retries; `attempts` reflects the real total.
console.log(attempts); // 3
