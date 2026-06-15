import { z } from 'zod';

const M = z.object({
  email: z.string().email(),
});

const r = M.safeParse({ email: 'not-an-email' });

if (r.success) {
  console.log('ok');
} else {
  const fields = [...new Set(r.error.issues.map(i => String(i.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
