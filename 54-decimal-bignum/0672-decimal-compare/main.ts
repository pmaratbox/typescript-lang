// Exact decimal comparison using the bignumber.js arbitrary-precision decimal type.
import { BigNumber } from 'bignumber.js';

const sum = new BigNumber('0.1').plus('0.2');
console.log(sum.isEqualTo('0.3').toString());
