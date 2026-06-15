import { z } from 'zod';

const Address = z.object({ city: z.string(), zip: z.number() });
const Person = z.object({ address: Address, name: z.string() });

const p = Person.parse({ address: { city: 'oslo', zip: 1000 }, name: 'alice' });
console.log(JSON.stringify(p));
