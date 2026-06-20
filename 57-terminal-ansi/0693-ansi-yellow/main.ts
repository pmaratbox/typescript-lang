import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's yellow() wraps the word with the foreground YELLOW sequence (\x1b[33m … \x1b[39m).
console.log(c.yellow('yellow'));
