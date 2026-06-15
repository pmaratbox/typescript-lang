import { Set as ImmSet } from 'immutable';

const a = ImmSet([1, 2, 3]);
const b = ImmSet([3, 4, 5]);

// union RETURNS A NEW set; a and b stay unchanged
const u = a.union(b);

console.log(u.sort().join(' '));
