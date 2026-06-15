import { Set as ImmutableSet } from 'immutable';

const original = ImmutableSet([1, 2, 3]);
const updated = original.add(4);

console.log(updated.size);
console.log(original.size);
