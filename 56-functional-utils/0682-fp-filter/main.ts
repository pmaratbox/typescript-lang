import * as R from 'ramda';

// Filter even numbers from [1..6] using Ramda's R.filter, then comma-join.
const result = R.filter((x: number) => x % 2 === 0, R.range(1, 7));
console.log(result.join(","));
