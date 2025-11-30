class Shape {
    constructor(name) {
        this.name = name;
    }
}
class Rectangle extends Shape
{
    constructor(name,width,height)
    {
        super(name)
        this.height = height;
        this.width = width;
    }
}
let rec=new Rectangle('ROR',2,3);
console.log(rec)
console.log(rec instanceof Rectangle);