interface Prototype {
  value: number;
  clone(): Prototype;
}

class Cell implements Prototype {
  constructor(public value: number) {}
  clone(): Cell {
    return new Cell(this.value);
  }
}

const original = new Cell(1);
const copy = original.clone();
copy.value = 2;
console.log(`${original.value} ${copy.value}`);
