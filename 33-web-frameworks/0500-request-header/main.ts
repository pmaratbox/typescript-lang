import Fastify from 'fastify';

const app = Fastify();

app.get('/whoami', async (req) => {
  return req.headers['x-name'] as string;
});

const res = await app.inject({
  method: 'GET',
  url: '/whoami',
  headers: { 'X-Name': 'alice' },
});
console.log(res.body);

await app.close();
