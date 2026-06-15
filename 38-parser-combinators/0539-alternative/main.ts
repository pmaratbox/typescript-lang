import P from 'parsimmon';

// Alternative / choice: literal 'cat' OR literal 'dog'.
const animal = P.alt(P.string('cat'), P.string('dog'));

console.log(animal.parse('dog').value);
