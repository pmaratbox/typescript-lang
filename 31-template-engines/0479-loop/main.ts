import Handlebars from 'handlebars';

const template = Handlebars.compile('{{#each nums}}{{this}}\n{{/each}}');
process.stdout.write(template({ nums: [1, 2, 3] }).trimEnd());
process.stdout.write('\n');
