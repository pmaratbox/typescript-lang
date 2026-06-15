import { z } from 'zod';

const M = z.object({
  name: z.string().min(3),
  age: z.number().min(0).max(120),
});

const r = M.safeParse({ name: 'al', age: 200 });

if (r.success) {
  console.log('ok');
} else {
  const fields = [...new Set(r.error.issues.map(i => String(i.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
