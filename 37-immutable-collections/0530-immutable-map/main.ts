import { Map as ImmutableMap } from 'immutable';

const original = ImmutableMap<string, number>({ a: 1 });
const updated = original.set('b', 2);

const keys = (m: ImmutableMap<string, number>) =>
  m.keySeq().toArray().sort().join(' ');

console.log(keys(updated));
console.log(keys(original));
