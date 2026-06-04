const rot13 = (s: string): string =>
  [...s]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + 13) % 26) + 97);
      if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      return ch;
    })
    .join("");

const once = rot13("hello");
const twice = rot13(once);
console.log(`${once} ${twice}`);
