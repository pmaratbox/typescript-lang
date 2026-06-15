import { z } from 'zod';

const User = z.object({ name: z.string(), roles: z.array(z.string()) });
const Data = z.object({ user: User });

const parsed = Data.parse(
  JSON.parse('{"user":{"name":"alice","roles":["admin","user"]}}'),
);

console.log(`${parsed.user.name} ${parsed.user.roles[0]}`);
