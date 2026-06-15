import { List } from 'immutable';

const original = List([1, 2, 3, 4, 5]);

// filter and map each return a brand-new immutable List
const result = original.filter((n) => n % 2 === 0).map((n) => n * 10);

console.log(result.join(' '));
