function evaluate(flag: boolean): string {
  return flag ? "enabled" : "disabled";
}

console.log(`${evaluate(true)} ${evaluate(false)}`);
