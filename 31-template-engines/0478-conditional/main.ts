import Handlebars from 'handlebars';

const template = Handlebars.compile('{{#if logged_in}}welcome{{else}}guest{{/if}}');
console.log(template({ logged_in: true }));
