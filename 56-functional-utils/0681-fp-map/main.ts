import * as R from 'ramda';

// Map x -> x*2 over [1,2,3] using Ramda's R.map, then comma-join.
const result = R.map((x: number) => x * 2, [1, 2, 3]);
console.log(result.join(","));
