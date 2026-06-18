import yaml from 'js-yaml';

const m: Record<string, unknown> = { name: 'Alice', age: 30, city: 'Paris' };

process.stdout.write(yaml.dump(m, { sortKeys: true }).trimEnd());
