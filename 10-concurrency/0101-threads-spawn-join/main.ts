async function worker(id: number): Promise<number> {
  return id;
}

(async () => {
  const tasks: Promise<number>[] = [worker(1), worker(2), worker(3)];
  const joined = await Promise.all(tasks);
  console.log(`done: ${joined.length}`);
})();
