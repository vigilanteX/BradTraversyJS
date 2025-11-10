// 1-String
// 2-Number
// 3-Boolean
// 4-Null-intentionally assigned
// 5-Undefined-when you just declare n don't assign value or intentionally specify value to undefined
// 6-Symbol
// 7-BigInt-value which number can't handle
//
// Note JS IS DYANMIC TYPE MEANS DATATYPE IS NOT DEFINED

// const s="aman"
// console.log(typeof s)

//String
const a="aman"

//Number
const b=123

//Boolean
const c=true;

//null
const d=null

// console.log(typeof d)//not to confuse null is not ref it is primitive

//below gives undefined
const e=undefined
let f

//bigint
const g=9876534n;

//array type is object
const h=[1,2,3,4,5]

//object literal type is object
const i={"name":"aman"}

//typeof for function is actually object but it comes as function
function hello()
{

}
console.log(typeof hello)


