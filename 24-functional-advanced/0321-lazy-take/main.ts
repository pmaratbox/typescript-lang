function* naturals(): Generator<number> {
  let n = 1;
  while (true) yield n++;
}

function take<T>(gen: Generator<T>, k: number): T[] {
  const out: T[] = [];
  for (const x of gen) {
    if (out.length >= k) break;
    out.push(x);
  }
  return out;
}

console.log(take(naturals(), 5).join(" "));
