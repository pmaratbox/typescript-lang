import { Command } from 'commander';

const program = new Command();
program.option('--count <n>', 'how many', (value) => parseInt(value, 10), 1);

// Parse a hardcoded EMPTY argv (not real process args) for deterministic output.
program.parse(['node', 'x']);

console.log(program.opts().count);
