// Exact decimal addition using bignumber.js (not IEEE-754 floats).
import { BigNumber } from 'bignumber.js';

const a = new BigNumber('0.1');
const b = new BigNumber('0.2');
console.log(a.plus(b).toString());
