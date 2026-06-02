class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1, new Node(2, new Node(3)));

const parts: number[] = [];
let node: Node | null = head;
while (node !== null) {
  parts.push(node.value);
  node = node.next;
}
console.log(parts.join(" -> "));
