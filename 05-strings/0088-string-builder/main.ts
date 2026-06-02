const sb: (string | number)[] = [];
[1, 2, 3].forEach((n, i) => {
  if (i > 0) sb.push("-");
  sb.push(n);
});
console.log(sb.join(""));
