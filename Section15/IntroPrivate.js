//use _ underscore to show dev this is private
class Wallet {
    constructor() {
        this._balance = 0;
    }

    deposit(amount) {
        this._balance = this._balance + amount;
    }

    withdraw(amount) {
        this._balance = this._balance - amount;
    }
}

let wallet = new Wallet();
wallet.deposit(3000)
wallet.withdraw(1000)
console.log(wallet._balance)