class Node {
  value: number;
  left: Node | null = null;
  right: Node | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

function insert(root: Node | null, value: number): Node {
  if (root === null) return new Node(value);
  if (value < root.value) root.left = insert(root.left, value);
  else root.right = insert(root.right, value);
  return root;
}

function inorder(root: Node | null, out: number[]): void {
  if (root === null) return;
  inorder(root.left, out);
  out.push(root.value);
  inorder(root.right, out);
}

let root: Node | null = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);

const out: number[] = [];
inorder(root, out);
console.log(out.join(" "));
