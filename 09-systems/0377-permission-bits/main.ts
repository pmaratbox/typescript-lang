const bits = 0b101;
const flags = "rwx";

let result = "";
for (let i = 0; i < 3; i++) {
  const bit = (bits >> (2 - i)) & 1;
  result += bit ? flags[i] : "-";
}

console.log(result);
