//we write function as ctor by keeping first letter as caps
// function Rectangle()
// {
//     this.name = "Rectangle";
//
// }
//use new keyword and then call
// const p = new Rectangle();
// console.log(p);

//if we do const p = Rectangle(); by this we call function not ctor


//when we create new instance what happens
//1-new empty object is created
//2-the ctor fn is called with arg we passed
//3-this is set to empty object
//4-new object is returned from ctor fn


function Employee(name, email,age)
{
    this.name = name;
    this.email = email;
    this.age = age;
    this.getName=function ()
    {
        return this.name;
    }


}
let employee1 = new Employee('Aman','dcx@gmail.com',33)
let employee2 = new Employee('Adarsh','adarsh@gmail.com',12)
console.log(employee1)
console.log(employee2)
console.log(employee1.constructor)
console.log(employee2.constructor)
console.log(employee1 instanceof Employee)
console.log(employee2 instanceof Employee)

// console.log(employee)
// console.log(employee.getName())
