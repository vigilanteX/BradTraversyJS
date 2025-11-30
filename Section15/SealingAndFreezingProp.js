let reactObj={
    firstName:"Aman",
    lastName:"Dixit"
}
//by seal u can modify existing but cannot add or remove prop
// Object.seal(reactObj);
//
// reactObj.age=22222
// console.log(reactObj)
//
// delete reactObj.firstName
// console.log(reactObj)

//freezing-prevents properties from being added,removed or moded
Object.freeze(reactObj)
console.log(reactObj)
reactObj.age=33333
console.log(reactObj)
reactObj.firstName="C";
console.log(reactObj)

console.log(Object.isSealed(reactObj),Object.isFrozen(reactObj))
