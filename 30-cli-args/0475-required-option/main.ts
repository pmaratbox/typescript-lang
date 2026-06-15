import { Command } from 'commander';

const program = new Command();
// requiredOption declares --id as mandatory; parseInt converts to an integer.
program.requiredOption('--id <id>', 'numeric id (required)', (v) => parseInt(v, 10));

// Parse a hardcoded argv (not real process args) for deterministic output.
program.parse(['node', 'x', '--id', '42']);

console.log(program.opts().id);
