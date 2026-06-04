interface Component {
  size(): number;
}

class Leaf implements Component {
  constructor(private value: number) {}
  size(): number {
    return this.value;
  }
}

class Composite implements Component {
  private children: Component[] = [];
  add(child: Component): this {
    this.children.push(child);
    return this;
  }
  size(): number {
    return this.children.reduce((sum, c) => sum + c.size(), 0);
  }
}

const tree = new Composite().add(new Leaf(1)).add(new Leaf(2)).add(new Leaf(3));
console.log(tree.size());
