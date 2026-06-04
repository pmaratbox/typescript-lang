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

function preorder(root: Node | null): number[] {
  const out: number[] = [];
  const stack: Node[] = root ? [root] : [];
  while (stack.length > 0) {
    const node = stack.pop()!;
    out.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return out;
}

let root: Node | null = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);
console.log(preorder(root).join(" "));
