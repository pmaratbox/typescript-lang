let x = 1;
const outputs: number[] = [];

for (let i = 0; i < 3; i++) {
    x = (5 * x + 3) % 16;
    outputs.push(x);
}

console.log(outputs.join(" "));
