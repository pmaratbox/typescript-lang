interface Address {
  city: string;
}

interface Person {
  name: string;
  address: Address;
}

const person: Person = {
  name: "Ada",
  address: { city: "London" },
};

console.log(person.address.city);
