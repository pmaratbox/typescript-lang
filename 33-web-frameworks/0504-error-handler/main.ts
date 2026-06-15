import Fastify from 'fastify';

// Build the Fastify app with logging disabled so error stack traces and
// request logs do not leak into stdout.
const app = Fastify({ logger: false });

// This handler throws a real error instead of returning a response.
app.get('/boom', async () => {
  throw new Error('kaboom');
});

// A framework error handler converts any thrown error into a 500 response.
app.setErrorHandler((_err, _req, reply) => {
  reply.status(500).send({ error: 'internal server error' });
});

// Exercise the throwing route IN-PROCESS via inject() (no port bound).
const res = await app.inject({ method: 'GET', url: '/boom' });

// Print the real status code Fastify produced from the thrown error.
console.log(res.statusCode);

await app.close();
