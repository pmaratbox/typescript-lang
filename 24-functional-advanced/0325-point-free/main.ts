const compose = <A, B, C>(f: (b: B) => C, g: (a: A) => B) => (x: A): C => f(g(x));

const square = (x: number): number => x * x;
const mapSquare = (xs: number[]): number[] => xs.map(square);
const sum = (xs: number[]): number => xs.reduce((a, b) => a + b, 0);

const sumOfSquares = compose(sum, mapSquare);

console.log(sumOfSquares([1, 2, 3]));
