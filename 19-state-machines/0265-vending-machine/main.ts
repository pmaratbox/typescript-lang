const PRICE = 25;
const coins = [10, 10, 5];

let total = 0;
let dispensed = false;
for (const coin of coins) {
  total += coin;
  if (total >= PRICE) {
    dispensed = true;
    break;
  }
}

if (dispensed) {
  console.log("dispensed");
}
