import Fastify from 'fastify';

// Build the Fastify app with logging disabled so only the intended output prints.
const app = Fastify({ logger: false });

// Only `/` is defined; any other path is unknown.
app.get('/', async () => 'hello');

// Request an undefined route IN-PROCESS via inject() (no port bound).
const res = await app.inject({ method: 'GET', url: '/missing' });

// Print the real HTTP status code Fastify returns for an unknown route.
console.log(res.statusCode);

await app.close();
