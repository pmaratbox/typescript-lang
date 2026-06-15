import { Command } from 'commander';

const program = new Command();

program
  .command('add <a> <b>')
  .description('sum two integers')
  .action((a: string, b: string) => {
    console.log(parseInt(a, 10) + parseInt(b, 10));
  });

// Parse a hardcoded argv (not real process args) for deterministic output.
program.parse(['node', 'x', 'add', '2', '3']);
