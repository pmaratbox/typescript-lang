import { z } from 'zod';

const Schema = z.object({
  name: z.string().min(3),
  age: z.number().min(0).max(120),
});

// age is MISSING -> required-field violation
const input = { name: 'alice' };

const r = Schema.safeParse(input);
if (r.success) {
  console.log('ok');
} else {
  const fields = [...new Set(r.error.issues.map(i => String(i.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
