import { z } from 'zod';

const Schema = z.object({
  name: z.string().min(3),
  age: z.number().int().min(0).max(120),
});

const r = Schema.safeParse({ name: 'alice', age: 30 });

if (r.success) {
  console.log('ok');
} else {
  const fields = [...new Set(r.error.issues.map(i => String(i.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
