for (const word of ["level", "hello"]) {
  const isPal: boolean = word === [...word].reverse().join("");
  console.log(`${word}: ${isPal ? "yes" : "no"}`);
}
