import * as R from 'ramda';

// flatMap x->[x, x*10] over [1,2,3] using ramda's chain, then comma-join.
const out = R.chain((x: number) => [x, x * 10], [1, 2, 3]).join(',');

console.log(out);
