import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's cyan() wraps the word with the foreground CYAN sequence (\x1b[36m … \x1b[39m).
console.log(c.cyan('cyan'));
