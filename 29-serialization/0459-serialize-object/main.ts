import { z } from 'zod';

// Fields declared alphabetically so insertion order yields alphabetical JSON keys.
const Person = z.object({ age: z.number().int(), name: z.string() });

const p = Person.parse({ age: 30, name: 'alice' });

// JSON.stringify with no spacing produces compact JSON.
console.log(JSON.stringify(p));
