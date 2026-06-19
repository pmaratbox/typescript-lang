import pRetry from 'p-retry';

let attempts = 0;

try {
  // Always fails; allow 3 total attempts (retries: 2 => 3 tries).
  await pRetry(
    async () => {
      attempts++;
      throw new Error('boom');
    },
    { retries: 2, minTimeout: 0, maxTimeout: 0, factor: 1 },
  );
  console.log('ok');
} catch {
  // Retries exhausted: the operation never succeeded.
  console.log('failed');
}
