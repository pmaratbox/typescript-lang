import * as R from 'ramda';

// Flatten [[1,2],[3,4],[5,6]] one level using Ramda's R.flatten,
// then comma-join the result.
const flat = R.flatten([[1, 2], [3, 4], [5, 6]]);
console.log(flat.join(","));
