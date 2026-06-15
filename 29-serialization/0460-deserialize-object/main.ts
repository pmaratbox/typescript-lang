import { z } from 'zod';

// Fields declared alphabetically (age, name) so serialization is canonical.
const Person = z.object({ age: z.number(), name: z.string() });

const json = '{"age":30,"name":"alice"}';
const person = Person.parse(JSON.parse(json));

console.log(`${person.name} ${person.age}`);
