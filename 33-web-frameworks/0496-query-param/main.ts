import Fastify from 'fastify';

const app = Fastify();

app.get('/greet', async (req) => {
  const { name } = req.query as { name?: string };
  return 'hello ' + name;
});

const res = await app.inject({ method: 'GET', url: '/greet?name=alice' });
console.log(res.body);

await app.close();
