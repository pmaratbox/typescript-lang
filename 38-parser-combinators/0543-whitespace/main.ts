import P from 'parsimmon';

// `trim` wraps a parser so it skips surrounding input on both sides.
// Here we pass P.optWhitespace (zero-or-more whitespace) so leading and
// trailing spaces around the integer are consumed by the combinator.
const num = P.regexp(/[0-9]+/).map(Number);
const padded = num.trim(P.optWhitespace);

const result = padded.parse('  42  ');
if (!result.status) {
  throw new Error('parse failed');
}

console.log(result.value);
