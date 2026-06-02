class Animal {
  speak(): string {
    return "some sound";
  }
}

class Dog extends Animal {
  speak(): string {
    return "Woof";
  }
}

console.log("animal:", new Animal().speak());
console.log("dog:", new Dog().speak());
