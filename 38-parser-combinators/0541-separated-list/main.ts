import P from 'parsimmon';

// sepBy: parse zero or more occurrences of one parser, separated by another.
// Here integers (one or more digits, mapped to Number) are separated by ','.
const integer = P.regexp(/[0-9]+/).map(Number);
const list = integer.sepBy(P.string(','));

// Run the combinator parser on the fixed input.
const result = list.parse('1,2,3');
if (!result.status) {
  throw new Error('parse failed');
}

// Sum the parsed list of ints and print the total.
const sum = result.value.reduce((a, b) => a + b, 0);
console.log(sum);
