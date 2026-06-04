class LinkedListNode {
  value: number;
  prev: LinkedListNode | null = null;
  next: LinkedListNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

const a = new LinkedListNode(1);
const b = new LinkedListNode(2);
const c = new LinkedListNode(3);
a.next = b;
b.prev = a;
b.next = c;
c.prev = b;

const forward: number[] = [];
let node: LinkedListNode | null = a;
while (node !== null) {
  forward.push(node.value);
  node = node.next;
}
console.log(forward.join(" "));

const backward: number[] = [];
node = c;
while (node !== null) {
  backward.push(node.value);
  node = node.prev;
}
console.log(backward.join(" "));
