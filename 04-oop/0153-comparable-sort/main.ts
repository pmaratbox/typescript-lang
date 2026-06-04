interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "alice", age: 30 },
  { name: "bob", age: 25 },
];

people.sort((a, b) => a.age - b.age);
console.log(people.map((p) => p.name).join(" "));
