import P from 'parsimmon';

// Sequence two parsers: char 'a' THEN char 'b'.
const a = P.string('a');
const b = P.string('b');

const sequence = P.seq(a, b).map(([first, second]) => first + second);

console.log(sequence.tryParse('ab'));
