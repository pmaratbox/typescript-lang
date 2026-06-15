import P from 'parsimmon';

// many: repeat a parser zero or more times.
// `P.string('a').many()` matches a run of 'a' characters, collecting them
// into an array. Applied to 'aaaa' it yields ['a','a','a','a'].
const manyA = P.string('a').many();

const result = manyA.parse('aaaa');
if (!result.status) {
  throw new Error('parse failed');
}

// Print how many were parsed.
console.log(result.value.length);
