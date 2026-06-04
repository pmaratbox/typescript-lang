const spec = "a-e";
const [start, end] = [spec.charCodeAt(0), spec.charCodeAt(2)];
let result = "";
for (let code = start; code <= end; code++) {
  result += String.fromCharCode(code);
}
console.log(result);
