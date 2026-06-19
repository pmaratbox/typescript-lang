import pRetry from 'p-retry';

// Scripted failure sequence via a shared counter: fail once, then return `ok`.
let attempts = 0;

const result = await pRetry(
  async () => {
    attempts++;
    if (attempts < 2) throw new Error('transient');
    return 'ok';
  },
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 },
);

// `result` is the value the library returned once the operation finally succeeded.
console.log(result); // ok
