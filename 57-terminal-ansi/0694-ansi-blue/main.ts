import { Chalk } from 'chalk';

// Force color on (level 1) so ANSI is emitted without a TTY.
const c = new Chalk({ level: 1 });

// chalk's blue() wraps the word with the foreground BLUE sequence (\x1b[34m … \x1b[39m).
console.log(c.blue('blue'));
