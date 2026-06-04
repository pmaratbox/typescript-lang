type Node =
  | { kind: "num"; value: number }
  | { kind: "add"; left: Node; right: Node }
  | { kind: "mul"; left: Node; right: Node };

function num(value: number): Node {
  return { kind: "num", value };
}

function evalNode(node: Node): number {
  switch (node.kind) {
    case "num":
      return node.value;
    case "add":
      return evalNode(node.left) + evalNode(node.right);
    case "mul":
      return evalNode(node.left) * evalNode(node.right);
  }
}

// AST for "1+2*3": Add(1, Mul(2, 3))
const ast: Node = {
  kind: "add",
  left: num(1),
  right: { kind: "mul", left: num(2), right: num(3) },
};

console.log(evalNode(ast));
