function siftDown(a: number[], start: number, end: number): void {
  let i = start;
  while (true) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    let largest = i;
    if (l < end && a[l] > a[largest]) largest = l;
    if (r < end && a[r] > a[largest]) largest = r;
    if (largest === i) break;
    [a[i], a[largest]] = [a[largest], a[i]];
    i = largest;
  }
}

function heapSort(a: number[]): number[] {
  const n = a.length;
  for (let i = (n >> 1) - 1; i >= 0; i--) siftDown(a, i, n);
  for (let end = n - 1; end > 0; end--) {
    [a[0], a[end]] = [a[end], a[0]];
    siftDown(a, 0, end);
  }
  return a;
}

console.log(heapSort([5, 3, 8, 1, 4]).join(" "));
