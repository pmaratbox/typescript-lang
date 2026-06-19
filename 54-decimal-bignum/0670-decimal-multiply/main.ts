// Exact decimal multiplication using bignumber.js (no float rounding).
import { BigNumber } from 'bignumber.js';
console.log(new BigNumber('1.1').times('1.1').toString());
