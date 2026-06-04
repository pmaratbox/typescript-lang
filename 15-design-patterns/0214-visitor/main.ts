interface Visitor {
  visitLeaf(leaf: Leaf): void;
}

interface Node {
  accept(visitor: Visitor): void;
}

class Leaf implements Node {
  constructor(public value: number) {}
  accept(visitor: Visitor): void {
    visitor.visitLeaf(this);
  }
}

class SumVisitor implements Visitor {
  total = 0;
  visitLeaf(leaf: Leaf): void {
    this.total += leaf.value;
  }
}

const nodes: Node[] = [new Leaf(1), new Leaf(2), new Leaf(3)];
const visitor = new SumVisitor();
for (const node of nodes) {
  node.accept(visitor);
}
console.log(visitor.total);
