class Pizza {
  constructor(
    private readonly size: string,
    private readonly toppings: readonly string[],
  ) {}

  toString(): string {
    return `Pizza(${this.size}, ${this.toppings.join(", ")})`;
  }
}

class PizzaBuilder {
  private size = "";
  private toppings: string[] = [];

  setSize(size: string): this {
    this.size = size;
    return this;
  }

  addTopping(topping: string): this {
    this.toppings.push(topping);
    return this;
  }

  build(): Pizza {
    return new Pizza(this.size, this.toppings);
  }
}

const pizza = new PizzaBuilder().setSize("M").addTopping("cheese").build();
console.log(pizza.toString());
