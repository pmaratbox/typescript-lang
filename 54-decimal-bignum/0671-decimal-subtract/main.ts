// Exact decimal subtraction using bignumber.js (no IEEE-754 rounding).
import { BigNumber } from 'bignumber.js';
const result = new BigNumber('1.0').minus('0.1');
console.log(result.toString());
