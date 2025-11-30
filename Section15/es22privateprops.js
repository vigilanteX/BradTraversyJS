class Wallet
{
    #firstName='aman';
    #lastName='en';

    #fullName()
    {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get fName()
    {
        return this.#fullName()
    }
}
let wt=new Wallet();
console.log(wt.fName);