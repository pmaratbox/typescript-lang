import { Command } from 'commander';

const program = new Command();
program.option('--verbose', 'enable verbose output');

// Parse a hardcoded argv (not real process args) for deterministic output.
program.parse(['node', 'x', '--verbose']);

console.log(Boolean(program.opts().verbose));
