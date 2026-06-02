function largest<T extends number | string>(a: T, b: T): T {
  return a > b ? a : b;
}

console.log(largest(3, 9));
console.log(largest("apple", "pear"));
