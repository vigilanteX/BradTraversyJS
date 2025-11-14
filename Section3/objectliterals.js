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
//delete employee['name']//remove property from object
console.log(employee)
employee.JL=4//add property directly to object
console.log(employee)

employee.currentTime=function (){
    console.log(Date.now())
}
employee.currentTime()
console.log(employee)
employee['middle name']='P'
console.log(employee)

console.log('---------------------------------------')
//another way to create object
let x=new Object()
x.name='Aman'
x.age=25
console.log(x)



const obj1={a:1,b:2}
const obj2={c:1,d:2}
const obj3={obj1,obj2,obj3:{e:5,f:7}}
const obj4={...obj1,...obj2}
console.log(obj4)

//life before spread operator
const obj5=Object.assign({},obj1,obj2)
console.log(obj5)

const obj={
    firstName:'Aman',
    lastName:'Aman',
    age:25,
    isActive:true
}

//return keys and values of object
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(obj.hasOwnProperty('firstName'))