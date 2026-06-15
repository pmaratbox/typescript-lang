import { Command } from 'commander';

const program = new Command();

// Collect a repeated --num option into a list of integers.
program.option(
  '--num <value>',
  'an integer (may repeat)',
  (value: string, previous: number[]) => previous.concat(parseInt(value, 10)),
  [] as number[],
);

// Parse a hardcoded argv (not real process args) for deterministic output.
program.parse(['node', 'x', '--num', '1', '--num', '2', '--num', '3']);

const nums: number[] = program.opts().num;
const sum = nums.reduce((acc, n) => acc + n, 0);

console.log(sum);
