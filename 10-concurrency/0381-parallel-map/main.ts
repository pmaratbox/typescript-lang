// Map a pure function (square) over the inputs concurrently with Promise.all,
// which preserves input order in its result array regardless of completion order.
const inputs = [1, 2, 3, 4];

const square = (n: number): Promise<number> =>
  new Promise((resolve) => setImmediate(() => resolve(n * n)));

Promise.all(inputs.map(square)).then((results) => {
  console.log(results.join(" "));
});
