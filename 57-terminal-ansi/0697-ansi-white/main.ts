import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's white() wraps the word with the foreground WHITE sequence (\x1b[37m … \x1b[39m).
console.log(c.white('white'));
