import * as R from 'ramda';

// Group [1..6] by parity using ramda's groupBy, then print sorted keys.
const grouped = R.groupBy(
  (x: number) => (x % 2 === 0 ? 'even' : 'odd'),
  R.range(1, 7),
) as Record<string, number[]>;

const out = Object.keys(grouped)
  .sort()
  .map((k) => `${k}:${grouped[k].join(',')}`)
  .join(';');

console.log(out);
