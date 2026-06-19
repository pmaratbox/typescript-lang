import config from 'config';

console.log(`${config.get('server.host')}:${config.get('server.port')}`);
