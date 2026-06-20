import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's red() wraps the word with the foreground RED sequence (\x1b[31m … \x1b[39m).
console.log(c.red('red'));
