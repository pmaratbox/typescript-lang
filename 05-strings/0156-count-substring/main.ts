const text: string = "ababab";
const needle: string = "ab";
let count = 0;
let i = 0;
while ((i = text.indexOf(needle, i)) !== -1) {
  count++;
  i += needle.length;
}
console.log(count);
