function quickselect(xs: number[], k: number): number {
  const a = [...xs];
  let lo = 0;
  let hi = a.length - 1;
  while (lo < hi) {
    const pivot = a[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
      if (a[j] < pivot) {
        [a[i], a[j]] = [a[j], a[i]];
        i++;
      }
    }
    [a[i], a[hi]] = [a[hi], a[i]];
    if (i === k) return a[i];
    if (i < k) lo = i + 1;
    else hi = i - 1;
  }
  return a[lo];
}

// 3rd smallest -> zero-based index 2
console.log(quickselect([7, 10, 4, 3, 20, 15], 2));
