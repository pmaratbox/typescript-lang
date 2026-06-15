import Fastify from 'fastify';

// Build the Fastify app with logging disabled so only the route output prints.
const app = Fastify({ logger: false });

// Register two routes on the same app.
app.get('/', async () => 'home');
app.get('/about', async () => 'about');

// Exercise each route IN-PROCESS via Fastify's inject() test client (no port bound).
const home = await app.inject({ method: 'GET', url: '/' });
const about = await app.inject({ method: 'GET', url: '/about' });

// Print each body, taken from the real HTTP responses, on its own line.
console.log(home.body);
console.log(about.body);

await app.close();
