const bytes = new TextEncoder().encode("Hi");
console.log([...bytes].join(" "));
