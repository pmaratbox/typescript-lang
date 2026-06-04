async function square(n: number): Promise<number> {
  return n * n;
}

(async () => {
  const [a, b] = await Promise.all([square(3), square(4)]);
  console.log(a + b);
})();
