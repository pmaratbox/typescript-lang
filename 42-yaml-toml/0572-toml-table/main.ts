import { parse as parseToml } from 'smol-toml';

const doc = '[server]\nhost = "localhost"\nport = 8080\n';
const t = parseToml(doc) as { server: { host: string; port: number } };

console.log(`host=${t.server.host} port=${t.server.port}`);
