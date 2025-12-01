class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return `Hi ${this.name}, my age is ${this.age}`;
    }
}
module.exports = Person;