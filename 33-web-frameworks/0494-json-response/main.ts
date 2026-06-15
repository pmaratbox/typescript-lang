import Fastify from 'fastify';

// Build a Fastify app with logging disabled so no request/startup
// logs leak into stdout.
const app = Fastify({ logger: false });

// Returning a plain object lets Fastify serialize it to compact JSON
// and set Content-Type: application/json.
app.get('/user', async () => ({ name: 'alice' }));

// Exercise the route IN-PROCESS via app.inject (no port is ever bound).
const res = await app.inject({ method: 'GET', url: '/user' });

// Print the actual JSON body produced by the framework.
console.log(res.body);
