// node-config env override: set the env var BEFORE config is first loaded.
// custom-environment-variables.json maps name -> APP_NAME, which has
// higher priority than config/default.json, so it overrides the file value.
process.env.APP_NAME = 'from-env';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const config = require('config');

console.log(config.get('name'));
