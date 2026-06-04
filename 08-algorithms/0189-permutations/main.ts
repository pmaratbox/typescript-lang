function permutations(xs: number[]): number[][] {
  if (xs.length === 0) return [[]];
  const result: number[][] = [];
  for (let i = 0; i < xs.length; i++) {
    const rest = [...xs.slice(0, i), ...xs.slice(i + 1)];
    for (const perm of permutations(rest)) {
      result.push([xs[i], ...perm]);
    }
  }
  return result;
}

for (const perm of permutations([1, 2, 3])) {
  console.log(perm.join(" "));
}
