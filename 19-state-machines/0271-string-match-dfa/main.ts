const pattern = "ab";
const text = "aab";

// DFA states 0..pattern.length; state == pattern.length means full match.
let state = 0;
let matchEnd = -1;
for (let i = 0; i < text.length; i++) {
  if (text[i] === pattern[state]) {
    state++;
  } else {
    state = text[i] === pattern[0] ? 1 : 0;
  }
  if (state === pattern.length) {
    matchEnd = i;
    break;
  }
}

const startIndex = matchEnd - pattern.length + 1;
console.log(startIndex);
