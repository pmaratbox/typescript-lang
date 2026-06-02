async function task(x: number): Promise<number> {
  return x;
}

(async () => {
  const [a, b] = await Promise.all([task(1), task(2)]);
  console.log(`sum: ${a + b}`);
})();
