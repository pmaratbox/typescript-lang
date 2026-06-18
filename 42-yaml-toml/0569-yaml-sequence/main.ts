import yaml from 'js-yaml';

const doc = 'fruits:\n  - apple\n  - banana\n  - cherry\n';
const d = yaml.load(doc) as { fruits: string[] };

console.log(d.fruits.join(','));
