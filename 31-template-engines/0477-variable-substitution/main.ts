import Handlebars from 'handlebars';

const template = Handlebars.compile('Hello {{name}}');
console.log(template({ name: 'alice' }));
