function name(num1,num2)//params
{
console.log(num1+num2);
}
name(1,2)

function add(num1,num2)//params
{
    return num1+num2;
}
console.log(add(5,1));

function printer(val="defaultname")
{
    return val+" is the name"
}
console.log(printer())

//REST ACCEPTS IN ARRAY
function restPrinter(a,b,c,...d)
{
    console.log(a,b,c,d)
}
restPrinter(1,2,3,4,5,6,7)//aftr 2 everything is array

function printObject(user)
{
    console.log(`user name is ${user.name}`)
}
printObject({name:"John", age:20});