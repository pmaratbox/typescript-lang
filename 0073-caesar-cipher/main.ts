const text = "abc";
const shift = 1;
const result = [...text]
  .map((ch) => String.fromCharCode(((ch.charCodeAt(0) - 97 + shift) % 26) + 97))
  .join("");
console.log(result);
