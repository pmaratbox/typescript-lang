function* naturals(): Generator<number> {
  let n = 1;
  while (true) yield n++;
}

function* lazyFilter<T>(gen: Generator<T>, pred: (x: T) => boolean): Generator<T> {
  for (const x of gen) if (pred(x)) yield x;
}

function take<T>(gen: Generator<T>, k: number): T[] {
  const out: T[] = [];
  for (const x of gen) {
    if (out.length >= k) break;
    out.push(x);
  }
  return out;
}

const evens = lazyFilter(naturals(), (x) => x % 2 === 0);
console.log(take(evens, 3).join(" "));
