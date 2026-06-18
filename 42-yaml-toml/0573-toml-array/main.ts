import { parse as parseToml } from 'smol-toml';

const t = parseToml('tags = ["red", "green", "blue"]\n') as any;
console.log((t.tags as string[]).join(',')); // red,green,blue
