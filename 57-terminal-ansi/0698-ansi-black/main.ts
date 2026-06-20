import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's black() wraps the word with the foreground BLACK sequence (\x1b[30m … \x1b[39m).
console.log(c.black('black'));
