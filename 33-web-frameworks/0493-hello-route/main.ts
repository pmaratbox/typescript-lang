import Fastify from 'fastify';

// Build the Fastify app with logging disabled so only the route output prints.
const app = Fastify({ logger: false });

// GET / returns the text `hello`.
app.get('/', async () => 'hello');

// Exercise the route IN-PROCESS via Fastify's inject() test client (no port bound).
const res = await app.inject({ method: 'GET', url: '/' });

// Print the body taken from the real HTTP response.
console.log(res.body);

await app.close();
