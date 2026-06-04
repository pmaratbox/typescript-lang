async function taskA(): Promise<number> {
  return 10;
}

async function taskB(): Promise<number> {
  return 20;
}

(async () => {
  const [a, b] = await Promise.all([taskA(), taskB()]);
  console.log(a + b);
})();
