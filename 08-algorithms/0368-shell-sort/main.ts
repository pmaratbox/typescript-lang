function shellSort(xs: number[]): number[] {
  const a = [...xs];
  for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < a.length; i++) {
      const tmp = a[i];
      let j = i;
      while (j >= gap && a[j - gap] > tmp) {
        a[j] = a[j - gap];
        j -= gap;
      }
      a[j] = tmp;
    }
  }
  return a;
}

console.log(shellSort([5, 2, 8, 1, 9, 3]).join(" "));
