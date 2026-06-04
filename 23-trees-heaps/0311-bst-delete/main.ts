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

function minValue(node: Node): number {
  let cur = node;
  while (cur.left !== null) cur = cur.left;
  return cur.val;
}

function remove(root: Node | null, val: number): Node | null {
  if (root === null) return null;
  if (val < root.val) {
    root.left = remove(root.left, val);
  } else if (val > root.val) {
    root.right = remove(root.right, val);
  } else {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    const succ = minValue(root.right);
    root.val = succ;
    root.right = remove(root.right, succ);
  }
  return root;
}

function inorder(node: Node | null, out: number[]): void {
  if (node === null) return;
  inorder(node.left, out);
  out.push(node.val);
  inorder(node.right, out);
}

let root: Node | null = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);
root = remove(root, 3);

const out: number[] = [];
inorder(root, out);
console.log(out.join(" "));
