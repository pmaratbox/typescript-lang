import Handlebars from 'handlebars';

const template = Handlebars.compile('{{user.name}}');
console.log(template({ user: { name: 'alice' } }));
