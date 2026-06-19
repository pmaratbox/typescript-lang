import pRetry from 'p-retry';

// Scripted failure sequence via a shared counter: the operation ALWAYS fails.
let attempts = 0;

try {
  await pRetry(
    async () => {
      attempts++;
      throw new Error('always fails');
    },
    // 4 retries = 5 total attempts; zero delay keeps the count deterministic.
    { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 },
  );
} catch {
  // p-retry exhausted its attempts; `attempts` holds the real total.
}

console.log(attempts); // 5
