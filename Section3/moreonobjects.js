let firstName="Aman"
let lastName="Dixit"
let age=24

const person={firstName:firstName,lastName:lastName,age:age,demo:4}
console.log(person)
const person2={firstName,lastName,age}
console.log(person2)
//destructuring is getting property from object
const {demo}=person

//renaming existing property
const {demo:meow}=person
console.log(meow)