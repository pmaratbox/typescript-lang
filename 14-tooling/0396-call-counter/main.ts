function withCounter<A extends unknown[], R>(fn: (...args: A) => R) {
  const wrapper = (...args: A): R => {
    wrapper.calls++;
    return fn(...args);
  };
  wrapper.calls = 0;
  return wrapper;
}

const noop = withCounter(() => {});
for (let i = 0; i < 5; i++) noop();

console.log(`calls: ${noop.calls}`);
