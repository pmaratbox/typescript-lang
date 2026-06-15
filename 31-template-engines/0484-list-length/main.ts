import Handlebars from 'handlebars';

Handlebars.registerHelper('length', (arr: unknown[]) => arr.length);

const template = Handlebars.compile('{{length items}}');
process.stdout.write(template({ items: [1, 2, 3] }).trimEnd());
process.stdout.write('\n');
