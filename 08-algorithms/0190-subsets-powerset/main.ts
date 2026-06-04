const xs = [1, 2, 3];

for (let mask = 0; mask < 1 << xs.length; mask++) {
  const subset: number[] = [];
  for (let i = 0; i < xs.length; i++) {
    if (mask & (1 << i)) subset.push(xs[i]);
  }
  console.log(subset.length === 0 ? "{}" : subset.join(" "));
}
