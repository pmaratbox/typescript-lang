import Handlebars from 'handlebars';

const template = Handlebars.compile('{{#if name}}{{name}}{{else}}anonymous{{/if}}');
console.log(template({}));
