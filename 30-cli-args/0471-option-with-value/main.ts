import { Command } from 'commander';

const program = new Command();
program.option('--name <name>', 'a name value');

// Parse a hardcoded argv (not real process args) for deterministic output.
program.parse(['node', 'x', '--name', 'alice']);

console.log(program.opts().name);
