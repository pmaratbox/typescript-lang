import { Command, Option } from 'commander';

const program = new Command();
program.addOption(
  new Option('--color <color>', 'pick a color').choices(['red', 'green', 'blue']),
);

// Parse a hardcoded argv (not real process args) for deterministic output.
program.parse(['node', 'x', '--color', 'green']);

console.log(program.opts().color);
