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

function levelOrder(root: Node | null): number[] {
  const out: number[] = [];
  const queue: Node[] = root ? [root] : [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    out.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return out;
}

let root: Node | null = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);
console.log(levelOrder(root).join(" "));
