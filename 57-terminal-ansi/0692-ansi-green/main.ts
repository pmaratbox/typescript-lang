import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's green() wraps the word with the foreground GREEN sequence (\x1b[32m … \x1b[39m).
console.log(c.green('green'));
