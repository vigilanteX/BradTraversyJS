class Employee {
    constructor(name, email)
    {
        this.name = name;
        this.email = email;

    }

    getName()
    {
        return this.name;
    }
}

const emp1=new Employee('AMAN','aman@vbn.com')
 console.log(emp1.getName());
const emp2=new Employee('ADARSH','adarsh@vbn.com')
console.log(emp2.getName());
