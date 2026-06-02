const inc = (x: number): number => x + 1;
const double = (x: number): number => x * 2;

function apply(f: (x: number) => number, x: number): number {
    return f(x);
}

console.log(`inc 5 = ${apply(inc, 5)}`);
console.log(`double 5 = ${apply(double, 5)}`);
