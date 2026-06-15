import Fastify from 'fastify';

const app = Fastify();

app.get('/item', async () => 'get');
app.post('/item', async () => 'post');

const res = await app.inject({ method: 'POST', url: '/item' });
console.log(res.body);
