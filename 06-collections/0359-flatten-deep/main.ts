type Nested = number | Nested[];

function flatten(items: Nested[]): number[] {
  const out: number[] = [];
  for (const item of items) {
    if (Array.isArray(item)) {
      out.push(...flatten(item));
    } else {
      out.push(item);
    }
  }
  return out;
}

const data: Nested[] = [1, [2, [3, 4]], 5];
console.log(flatten(data).join(" "));
