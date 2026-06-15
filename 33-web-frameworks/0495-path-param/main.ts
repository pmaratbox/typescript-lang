import Fastify from 'fastify';

const app = Fastify({ logger: false });

app.get('/users/:id', async (req) => {
  const { id } = req.params as { id: string };
  return id;
});

const res = await app.inject({ method: 'GET', url: '/users/42' });
console.log(res.body);

await app.close();
