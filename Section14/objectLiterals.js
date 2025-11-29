const employee={
    firstName:'John',
    lastName:'Doe',
    age:25,
    getFullName:function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(employee.getFullName())
console.log(this)//window

function checkThisHere()
{
    console.log(this)//window
}
checkThisHere();