const houses: number[] = [2, 7, 9, 3, 1];
let rob = 0;
let skip = 0;
for (const amount of houses) {
  const newRob = skip + amount;
  skip = Math.max(skip, rob);
  rob = newRob;
}
console.log(Math.max(rob, skip));
