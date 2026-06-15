import { List } from 'immutable';

const original = List([2, 3]);

// Each call returns a NEW list; `original` is never mutated.
const prepended = original.unshift(1);
const appended = prepended.push(4);

console.log(appended.join(' '));

// Demonstrate the original is unchanged.
console.assert(original.join(' ') === '2 3');
