class Employee {
    constructor()
    {
        console.log("Employee constructor");
    }
}
let employee = new Employee();
class Rectangle
{
    constructor(name,height,width)
    {
        this.name=name;
        this.height=height;
        this.width=width;
    }
    area()
    {
        return this.height*this.width;
    }
    displayArea()
    {
        console.log(`Display Area is ${this.area()}`);
    }
}

let rectangle = new Rectangle('aman',22,22);
console.log(rectangle);
console.log(rectangle.area());
rectangle.displayArea()