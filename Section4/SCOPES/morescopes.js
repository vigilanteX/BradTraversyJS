// const x=12;
// if (true)
// {
//     const y=200
//     console.log(x+y)//outer x + inner y
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
//console.log(i)//ReferenceError: i is not defined


//VAR vs CONST vs LET
if (true)
{
    let f=11
    const g = 12
    var h = 13
}
//console.log(f)//ReferenceError: f is not defined-block scoped
//console.log(g)//ReferenceError: g is not defined-blocked scoped
//console.log(h) worked as h is var and var is global scoped

//let and var in loops
// for (let i = 0; i < 10; i++) {
//
// }
// //console.log(i)//ReferenceError: i is not defined
// for (var j = 0; j <=10; j++) {
//
// }
// console.log(j)//works as var is non blocked 11

//VAR IS FN SCOPE
function mellow()
{
    var x=12;
}
mellow()
console.log(x)//ReferenceError: x is not defined as var is function scope



