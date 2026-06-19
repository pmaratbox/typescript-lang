import * as R from 'ramda';

const total = R.reduce((a: number, b: number) => a + b, 0, R.range(1, 6));
console.log(total);
