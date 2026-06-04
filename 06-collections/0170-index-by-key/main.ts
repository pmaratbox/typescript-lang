interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: "alice" },
  { id: 2, name: "bob" },
];

const byId = new Map<number, string>(people.map((p) => [p.id, p.name]));
console.log(`id 2: ${byId.get(2)}`);
