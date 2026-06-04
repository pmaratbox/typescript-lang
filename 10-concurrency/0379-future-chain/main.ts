// Compose asynchronous steps as a promise chain: start at 5, double it, then
// add one. Each .then is a future stage transforming the prior result.
const step = (n: number): Promise<number> => Promise.resolve(n);

step(5)
  .then((n) => n * 2)
  .then((n) => n + 1)
  .then((n) => console.log(n));
