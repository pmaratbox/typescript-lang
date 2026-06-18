import { parse as parseToml } from 'smol-toml';

const doc = '[[servers]]\nname = "alpha"\n[[servers]]\nname = "beta"\n';
const t = parseToml(doc) as any;
console.log(t.servers.map((x: any) => x.name).join(","));
