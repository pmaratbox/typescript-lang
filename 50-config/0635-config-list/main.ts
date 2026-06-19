import config from 'config';

const hosts = config.get<string[]>('hosts');
console.log(hosts.join(','));