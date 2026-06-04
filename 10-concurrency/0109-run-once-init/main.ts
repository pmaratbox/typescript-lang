let initCount = 0;
let initialized: Promise<void> | null = null;

function initialize(): Promise<void> {
  // Cache the first call's promise so the body runs exactly once.
  if (initialized === null) {
    initialized = (async () => {
      initCount += 1;
    })();
  }
  return initialized;
}

(async () => {
  // Several callers race to trigger initialization.
  await Promise.all(Array.from({ length: 5 }, () => initialize()));
  console.log(`init count: ${initCount}`);
})();
