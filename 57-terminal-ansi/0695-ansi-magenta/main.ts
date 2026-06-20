import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's magenta() wraps the word with the foreground MAGENTA sequence (\x1b[35m … \x1b[39m).
console.log(c.magenta('magenta'));
