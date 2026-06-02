const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter((n) => n % 2 === 0);
const odds = nums.filter((n) => n % 2 !== 0);
console.log("evens: " + evens.join(" "));
console.log("odds: " + odds.join(" "));
