const n = 5;
let prev = 1;
let curr = 1;
for (let i = 2; i <= n; i++) {
  [prev, curr] = [curr, prev + curr];
}
console.log(curr);
