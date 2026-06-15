import { Command } from 'commander';

const program = new Command();
program.argument('<name>', 'the name to print');

// Parse a hardcoded argv (after the leading node/script entries) for determinism.
program.parse(['node', 'main.ts', 'alice']);

const [name] = program.processedArgs;
console.log(name);
