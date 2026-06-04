// An async generator acts as a channel: the producer yields, the consumer awaits.
async function* producer(): AsyncGenerator<number> {
  yield 1;
  yield 2;
  yield 3;
}

(async () => {
  const received: number[] = [];
  for await (const value of producer()) {
    received.push(value);
  }
  console.log(received.join(" "));
})();
