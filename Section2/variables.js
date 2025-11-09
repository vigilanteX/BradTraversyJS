
//let was introduced in es6, and we cannot use before declaring variable and error-ReferenceError: Cannot access 'c' before initialization
// let a='a'
// let b=2
// console.log(a,b,c)
// let c='aman'



// let d=23;
// d=29;
// console.log(d);//reassigning is allowed in let


// let e;
// e=11
// console.log(e)


//cosnt was intro in es6 like to declare constant
// const x=12
// console.log(x)
//x=34;//we cannot reassign value to const

//const y;//const cannot be just declared without value

//in const if we make changes to same ref it will work
// const x=[1,2,3]
// x.push(8)
// console.log(x)
//
// const y={name:"aman"}
// y.age=26
// console.log(y)

//multiple declaration
let a,b=6,c;
const d=12,e="aman"
console.log(a,b,c,d,e)