function* squares(): Generator<number> {
  let n = 1;
  while (true) {
    yield n * n;
    n += 1;
  }
}

const first3: number[] = [];
for (const sq of squares()) {
  first3.push(sq);
  if (first3.length === 3) break;
}
console.log(first3.join(" "));
