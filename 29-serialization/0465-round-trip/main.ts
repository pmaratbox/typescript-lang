import { z } from 'zod';

// Fields declared alphabetically (age, name) so serialization is canonical.
const Person = z.object({ age: z.number(), name: z.string() });

// Build a Person, then round-trip it through the serializer and back.
const original = Person.parse({ age: 30, name: 'alice' });
const json = JSON.stringify(original);
const restored = Person.parse(JSON.parse(json));

console.log(restored.name);
