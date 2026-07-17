class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Balance after deposit: " + this.balance);
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log("Balance after withdrawal: " + this.balance);
    }
}

// Create object
const account = new BankAccount("Meet", 10000);

account.deposit(5000);
account.withdraw(2000);