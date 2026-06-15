import Fastify from 'fastify';

const app = Fastify();

app.post('/create', async (_request, reply) => {
  reply.code(201);
  return { created: true };
});

const res = await app.inject({ method: 'POST', url: '/create' });
console.log(res.statusCode);
