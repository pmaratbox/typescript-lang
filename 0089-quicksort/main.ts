function quicksort(items: number[]): number[] {
  if (items.length <= 1) return items;
  const pivot = items[0];
  const rest = items.slice(1);
  const less = rest.filter((x) => x < pivot);
  const greater = rest.filter((x) => x >= pivot);
  return [...quicksort(less), pivot, ...quicksort(greater)];
}

const data = [3, 1, 4, 1, 5, 2];
console.log(quicksort(data).join(" "));
