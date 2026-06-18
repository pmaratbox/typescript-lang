import yaml from 'js-yaml';

const doc = "name: Alice\nrole: admin\nage: 30\n";
const d = yaml.load(doc) as Record<string, unknown>;

console.log(`${d.name} ${d.role} ${d.age}`);
