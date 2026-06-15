import P from 'parsimmon';

// map: transform the value produced by a parser.
// `P.regexp(/[0-9]+/)` matches a run of digits; `.map` is the combinator that
// rewrites the result. Here we first map the matched text to an integer, then
// map that integer to value*2. Parsing '21' yields 21, doubled to 42.
const doubled = P.regexp(/[0-9]+/)
  .map(Number)
  .map((n) => n * 2);

const result = doubled.parse('21');
if (!result.status) {
  throw new Error('parse failed');
}

console.log(result.value);
