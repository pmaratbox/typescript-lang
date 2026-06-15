import { z } from 'zod';

// Fields declared alphabetically so insertion order yields alphabetical JSON keys.
const Scalars = z.object({
  active: z.boolean(),
  count: z.number().int(),
  label: z.string(),
});

const s = Scalars.parse({ active: true, count: 5, label: 'x' });

// JSON.stringify with no spacing produces compact JSON; booleans are lowercase.
console.log(JSON.stringify(s));
