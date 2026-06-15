import Fastify from 'fastify';

const app = Fastify();

app.post('/sum', async (req) => {
  const { a, b } = req.body as { a: number; b: number };
  return String(a + b);
});

const res = await app.inject({
  method: 'POST',
  url: '/sum',
  payload: { a: 2, b: 3 },
});
console.log(res.body);

await app.close();
