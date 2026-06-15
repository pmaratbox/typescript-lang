import { List } from 'immutable';

const original = List([1, 2, 3]);
const updated = original.set(0, 99);

console.log(updated.join(' '));
console.log(original.join(' '));
