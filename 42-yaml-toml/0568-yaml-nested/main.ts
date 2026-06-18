import yaml from 'js-yaml';

const doc = "server:\n  host: localhost\n  port: 8080\n";
const data = yaml.load(doc) as any;

console.log(`${data.server.host}:${data.server.port}`);
