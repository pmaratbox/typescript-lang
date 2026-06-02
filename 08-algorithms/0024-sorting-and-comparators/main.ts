const nums: number[] = [3, 1, 2];
const asc = [...nums].sort((a, b) => a - b);
const desc = [...nums].sort((a, b) => b - a);
console.log("asc:", ...asc);
console.log("desc:", ...desc);
