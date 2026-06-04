class Account {
  #balance: number;

  constructor(initial: number) {
    this.#balance = initial;
  }

  deposit(amount: number): void {
    this.#balance += amount;
  }

  get balance(): number {
    return this.#balance;
  }
}

const account = new Account(100);
account.deposit(50);
console.log(account.balance);
