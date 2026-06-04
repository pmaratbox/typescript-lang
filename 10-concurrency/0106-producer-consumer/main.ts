// Producer yields 1..5 over a channel; the consumer accumulates the sum.
async function* producer(): AsyncGenerator<number> {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}

(async () => {
  let sum = 0;
  for await (const value of producer()) {
    sum += value;
  }
  console.log(sum);
})();
