function makeCounter(): () => number {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}

const next = makeCounter();
console.log(`count: ${next()}`);
console.log(`count: ${next()}`);
