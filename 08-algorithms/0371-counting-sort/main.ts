function countingSort(xs: number[]): number[] {
  if (xs.length === 0) return [];
  const max = Math.max(...xs);
  const counts = new Array<number>(max + 1).fill(0);
  for (const x of xs) counts[x]++;
  const out: number[] = [];
  for (let v = 0; v <= max; v++) {
    for (let c = 0; c < counts[v]; c++) out.push(v);
  }
  return out;
}

console.log(countingSort([3, 1, 2, 3, 1]).join(" "));
