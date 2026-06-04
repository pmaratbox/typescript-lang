function dutchFlag(xs: number[]): number[] {
  const a = [...xs];
  let low = 0;
  let mid = 0;
  let high = a.length - 1;
  while (mid <= high) {
    if (a[mid] === 0) {
      [a[low], a[mid]] = [a[mid], a[low]];
      low++;
      mid++;
    } else if (a[mid] === 1) {
      mid++;
    } else {
      [a[mid], a[high]] = [a[high], a[mid]];
      high--;
    }
  }
  return a;
}

console.log(dutchFlag([2, 0, 2, 1, 1, 0]).join(" "));
