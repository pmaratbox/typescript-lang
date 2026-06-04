const bytes = new TextEncoder().encode("Hi");
const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0"));
console.log(hex.join(" "));
