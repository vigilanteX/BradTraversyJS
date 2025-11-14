let fruits=['banana','berries']
let fruits2=['grapes','strawberry']
// fruits.push(fruits2)
// console.log(fruits)//by this fruits last index will be pushed with an array
// //[ 'banana', 'berries', [ 'grapes', 'strawberry' ] ]
// console.log(fruits[2])
// //[ 'grapes', 'strawberry' ]

// let master=fruits.concat(fruits2)
// console.log(master)
// //[ 'banana', 'berries', 'grapes', 'strawberry' ]

// //spread
// let x=[...fruits,...fruits2]
// console.log(x)


let ar=[1,[2,3],[4,5,6],7,8]
ar=ar.flat()
console.log(ar)
console.log(Array.isArray(ar))

console.log(Array.from('abcde'))