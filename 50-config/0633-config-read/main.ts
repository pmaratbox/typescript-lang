import config from 'config';

// node-config loads config/default.json relative to the working directory.
// Read the top-level string `name` and print it.
console.log(config.get('name'));
