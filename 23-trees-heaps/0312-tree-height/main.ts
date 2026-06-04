class Node {
  left: Node | null = null;
  right: Node | null = null;
  constructor(public val: number) {}
}

function insert(root: Node | null, val: number): Node {
  if (root === null) return new Node(val);
  if (val < root.val) root.left = insert(root.left, val);
  else root.right = insert(root.right, val);
  return root;
}

function height(node: Node | null): number {
  if (node === null) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}

let root: Node | null = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);
console.log(height(root));
