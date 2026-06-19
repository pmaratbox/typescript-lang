import * as R from 'ramda';

// Remove duplicates preserving order with ramda's uniq.
console.log(R.uniq([1, 2, 2, 3, 3, 3]).join(","));
