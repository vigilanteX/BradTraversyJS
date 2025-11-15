let r={
    firstName:"aman",
    age:4,
    lastName:"dixit"
}
//JSON.stringify() converts js object to JSON
let result=JSON.stringify(r)
console.log(result)
//NOTE WE CANNOT ACCESS JSON property by . annotation.
//TO ACCESS you first need to parse

//JSON.parse() converts JSON to object literal
let result2=JSON.parse(result)
console.log(result2)
