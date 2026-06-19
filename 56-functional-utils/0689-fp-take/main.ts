import * as R from 'ramda';

// Take the first 3 elements of [1..10] with ramda's take.
console.log(R.take(3, R.range(1, 11)).join(","));
