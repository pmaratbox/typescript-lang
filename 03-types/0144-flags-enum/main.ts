enum Perm {
  READ = 1,
  WRITE = 2,
}

const flags = Perm.READ | Perm.WRITE;
const hasWrite = (flags & Perm.WRITE) !== 0;
console.log(`${flags} ${hasWrite ? "yes" : "no"}`);
