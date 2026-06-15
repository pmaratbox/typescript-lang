import { z } from 'zod';

const M = z.object({ code: z.string().max(5) });
const r = M.safeParse({ code: 'ABCDEFG' });

if (!r.success) {
  const fields = [...new Set(r.error.issues.map(i => String(i.path[0])))].sort();
  console.log(fields.join('\n'));
} else {
  console.log('ok');
}
