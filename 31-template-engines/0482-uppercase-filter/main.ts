import Handlebars from 'handlebars';

Handlebars.registerHelper('upper', (value: string) => value.toUpperCase());

const template = Handlebars.compile('{{upper name}}');
console.log(template({ name: 'alice' }));
