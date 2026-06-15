import { z } from 'zod';

const Numbers = z.array(z.number());

const numbers = Numbers.parse([1, 2, 3]);

console.log(JSON.stringify(numbers));
