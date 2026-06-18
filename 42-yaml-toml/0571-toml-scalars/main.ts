import { parse as parseToml } from 'smol-toml';

const t = parseToml('title = "demo"\nversion = 2\n') as any;
console.log(`${t.title} ${t.version}`); // demo 2
