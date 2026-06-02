const text = "aaabbc";
let result = "";
let i = 0;
while (i < text.length) {
  const ch = text[i];
  let count = 0;
  while (i < text.length && text[i] === ch) {
    count++;
    i++;
  }
  result += ch + count;
}
console.log(result);
