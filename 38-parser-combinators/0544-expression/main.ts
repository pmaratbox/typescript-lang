import P from 'parsimmon';

// A '+'-separated sequence of integers, summed via a fold.
const num = P.regexp(/[0-9]+/).map(Number);
const expr = P.sepBy1(num, P.string('+')).map((ns) =>
  ns.reduce((a, b) => a + b, 0),
);

console.log(expr.tryParse('10+20+30'));
