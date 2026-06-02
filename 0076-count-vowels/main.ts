const word = "hello";
const vowels = "aeiou";
let count = 0;
for (const ch of word) {
  if (vowels.includes(ch)) count++;
}
console.log(count);
