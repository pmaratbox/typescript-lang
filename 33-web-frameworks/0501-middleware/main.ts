import Fastify from 'fastify';

// Build the Fastify app with logging disabled so only the route output prints.
const app = Fastify({ logger: false });

// Middleware: an `onSend` hook runs for every response and transforms the body.
// It prefixes the payload with `[mw] ` — the handler itself only returns `hello`.
app.addHook('onSend', async (_req, _reply, payload) => {
  return `[mw] ${payload}`;
});

// GET / returns the text `hello` (no prefix here — that comes from the hook).
app.get('/', async () => 'hello');

// Exercise the route IN-PROCESS via Fastify's inject() test client (no port bound).
const res = await app.inject({ method: 'GET', url: '/' });

// Print the body taken from the real HTTP response (already transformed by middleware).
console.log(res.body);

await app.close();
