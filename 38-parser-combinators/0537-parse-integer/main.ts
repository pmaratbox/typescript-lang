import P from 'parsimmon';

// Build a parser from combinators: one-or-more digits via P.regexp,
// then .map(Number) turns the matched text into an integer.
const integer = P.regexp(/[0-9]+/).map(Number);

const result = integer.parse('42').value;
console.log(result);
