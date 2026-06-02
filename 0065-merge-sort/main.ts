function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(items: number[]): number[] {
  if (items.length <= 1) return items;
  const mid = Math.floor(items.length / 2);
  return merge(mergeSort(items.slice(0, mid)), mergeSort(items.slice(mid)));
}

const data = [3, 1, 4, 1, 5, 2];
console.log(mergeSort(data).join(" "));
