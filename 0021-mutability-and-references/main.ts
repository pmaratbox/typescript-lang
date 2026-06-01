interface Box {
  value: number;
}

function inc(box: Box): void {
  box.value++;
}

const box: Box = { value: 1 };
console.log(`before: ${box.value}`);
inc(box);
console.log(`after: ${box.value}`);
