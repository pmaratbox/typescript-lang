function suffixArray(s: string): number[] {
  const indices = Array.from({ length: s.length }, (_, i) => i);
  indices.sort((a, b) => {
    const sa = s.slice(a);
    const sb = s.slice(b);
    return sa < sb ? -1 : sa > sb ? 1 : 0;
  });
  return indices;
}

console.log(suffixArray("banana").join(" "));
