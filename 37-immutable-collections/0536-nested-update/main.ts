import { Map as IMap } from 'immutable';

const original = IMap({ user: IMap({ age: 30 }) });
const updated = original.setIn(['user', 'age'], 31);

console.log(updated.getIn(['user', 'age']));
console.log(original.getIn(['user', 'age']));
