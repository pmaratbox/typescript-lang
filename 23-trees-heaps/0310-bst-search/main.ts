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

function search(root: Node | null, val: number): boolean {
  if (root === null) return false;
  if (val === root.val) return true;
  return val < root.val ? search(root.left, val) : search(root.right, val);
}

let root: Node | null = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);

const a = search(root, 4) ? "yes" : "no";
const b = search(root, 6) ? "yes" : "no";
console.log(`${a} ${b}`);
