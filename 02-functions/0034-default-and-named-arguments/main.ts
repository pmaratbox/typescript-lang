function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

console.log(greet("Ada"));
console.log(greet("Ada", "Hi"));
