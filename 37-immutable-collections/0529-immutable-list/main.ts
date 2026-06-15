import { List } from 'immutable';

const original = List([1, 2, 3]);
const updated = original.push(4);

console.log(updated.join(' '));
console.log(original.join(' '));
