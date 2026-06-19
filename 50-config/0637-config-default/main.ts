import config from 'config';

const value = config.has('missing') ? config.get<string>('missing') : 'fallback';
console.log(value);
