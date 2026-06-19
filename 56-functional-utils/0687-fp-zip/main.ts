import * as R from 'ramda';

// Zip [1,2,3] with ["a","b","c"] using Ramda's R.zipWith,
// formatting each pair as `<n><s>`, then comma-join the result.
const zipped = R.zipWith(
  (n: number, s: string) => `${n}${s}`,
  [1, 2, 3],
  ["a", "b", "c"],
);
console.log(zipped.join(","));
