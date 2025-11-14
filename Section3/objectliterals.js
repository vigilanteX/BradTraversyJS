let employee={
    name:"Aman",
    age:25,
    isActive:true,
    address:{
        firstLine:"add line 1",
        lastLine:"add line 2",
        pincode:208017
    },
    hobbies:['sleeping','gaming']
}
console.log(employee)
console.log(employee.name)
console.log(employee['name'])
employee['name']='dixit'
console.log(employee)
delete employee['name']//remove property from object
console.log(employee)