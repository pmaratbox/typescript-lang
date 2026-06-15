import { z } from 'zod';

// Fields declared alphabetically (age, name) so serialization is canonical.
// `age` is optional with a default of 0 supplied when the field is absent.
const Person = z.object({ age: z.number().default(0), name: z.string() });

const json = '{"name":"alice"}';
const person = Person.parse(JSON.parse(json));

console.log(`${person.name} ${person.age}`);
