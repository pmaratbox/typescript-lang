interface Coffee {
  cost(): number;
}

class BaseCoffee implements Coffee {
  cost(): number {
    return 2;
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected inner: Coffee) {}
  abstract cost(): number;
}

class Milk extends CoffeeDecorator {
  cost(): number {
    return this.inner.cost() + 1;
  }
}

class Sugar extends CoffeeDecorator {
  cost(): number {
    return this.inner.cost() + 1;
  }
}

const coffee: Coffee = new Sugar(new Milk(new BaseCoffee()));
console.log(coffee.cost());
