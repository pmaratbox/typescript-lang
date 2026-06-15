import { z } from 'zod';

const M = z.object({
  password: z.string().refine((s) => /\d/.test(s)),
});
const r = M.safeParse({ password: 'abcdef' });

if (!r.success) {
  const fields = [...new Set(r.error.issues.map((i) => String(i.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
} else {
  console.log('ok');
}
