import { z } from 'zod';

// The code uses a camelCase field `fullName`. zod's `.transform` renames it to
// the JSON key `full_name` during parsing — zod's mechanism for field aliasing.
const Person = z
  .object({ fullName: z.string() })
  .transform((p) => ({ full_name: p.fullName }));

const p = Person.parse({ fullName: 'alice' });

// JSON.stringify with no spacing produces compact JSON with the renamed key.
console.log(JSON.stringify(p));
