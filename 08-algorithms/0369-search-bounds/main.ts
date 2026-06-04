function lowerBound(a: number[], target: number): number {
  let lo = 0;
  let hi = a.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (a[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

function upperBound(a: number[], target: number): number {
  let lo = 0;
  let hi = a.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (a[mid] <= target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

const arr = [1, 3, 5, 5, 7];
console.log(`${lowerBound(arr, 5)} ${upperBound(arr, 5)}`);
