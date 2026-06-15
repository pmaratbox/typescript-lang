import Handlebars from 'handlebars';

const template = Handlebars.compile(
  '{{#each users}}{{name}}: {{age}}\n{{/each}}'
);

const out = template({
  users: [
    { name: 'alice', age: 30 },
    { name: 'bob', age: 25 },
  ],
});

process.stdout.write(out.replace(/\n$/, ''));
process.stdout.write('\n');
