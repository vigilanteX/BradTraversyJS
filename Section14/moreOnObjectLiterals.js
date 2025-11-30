function Rectangle(name,width,height)
{
    this.name=name;
    this.width=width;
    this.height=height;
    this.area=function()
    {
        return this.height*this.width;
    }
}
const rect1=new Rectangle('rectangle1',2,2);
const rect2=new Rectangle('rectangle2',3,3);
rect1.newprop=123;
rect1.age=function()
{
    return 25
}
console.log(rect1);
//console.log(rect1.age());
delete rect1.newprop
console.log(rect1);




