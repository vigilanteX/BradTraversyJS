class Person {
    set firstName (value) {
        this.xfirstName = value;
    }
    get firstName () {
        return this.xfirstName;
    }
    set lastName (value) {
        this.xlastName = value;
    }
    get lastName () {
        return this.xlastName;
    }

    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }

}

let p=new Person();
p.firstName = 'John';
p.lastName='Doe'
console.log(`above returned ${p.firstName} ${p.lastName}`);
console.log(p.fullName);


