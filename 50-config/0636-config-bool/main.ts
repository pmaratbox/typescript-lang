import config from 'config';

const debug = config.get<boolean>('debug');
console.log(debug);
