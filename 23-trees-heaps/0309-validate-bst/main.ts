interface Node {
  val: number;
  left: Node | null;
  right: Node | null;
}

function leaf(val: number): Node {
  return { val, left: null, right: null };
}

function isBst(node: Node | null, low: number, high: number): boolean {
  if (node === null) return true;
  if (node.val <= low || node.val >= high) return false;
  return isBst(node.left, low, node.val) && isBst(node.right, node.val, high);
}

const good: Node = {
  val: 5,
  left: { val: 3, left: leaf(1), right: leaf(4) },
  right: leaf(8),
};

const bad: Node = {
  val: 5,
  left: { val: 3, left: leaf(1), right: leaf(6) },
  right: leaf(8),
};

const a = isBst(good, -Infinity, Infinity) ? "yes" : "no";
const b = isBst(bad, -Infinity, Infinity) ? "yes" : "no";
console.log(`${a} ${b}`);
