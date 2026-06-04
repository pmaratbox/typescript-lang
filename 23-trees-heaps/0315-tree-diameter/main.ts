interface Node {
  left: Node | null;
  right: Node | null;
}

function leaf(): Node {
  return { left: null, right: null };
}

let diameter = 0;

function height(node: Node | null): number {
  if (node === null) return 0;
  const l = height(node.left);
  const r = height(node.right);
  diameter = Math.max(diameter, l + r);
  return 1 + Math.max(l, r);
}

// root -> A, B ; A -> C, D
const root: Node = {
  left: { left: leaf(), right: leaf() }, // A with C, D
  right: leaf(), // B
};

height(root);
console.log(diameter);
