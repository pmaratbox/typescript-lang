const input = "a b&c";
const encoded = [...input]
  .map((ch) =>
    /[A-Za-z0-9\-._~]/.test(ch)
      ? ch
      : "%" + ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"),
  )
  .join("");
console.log(encoded);
