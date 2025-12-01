//case1 object literals
//Note use any variable name while importing
// const m=require('./utils')
// console.log(m)

//case2 functions
//Note use any variable name while importing
// const cp= require('./utils')
// console.log(cp('aman'))

//case3 importing functions
// const fns=require('./utils')
// console.log(fns.A())
// console.log(fns.B())
//OR destructure way below
// const {A,B}=require('./utils')
// console.log(A(),B());


//case4 class import
//Note use any variable name while importing in this case P
// const P=require('./Person')
// const p1=new P('aman',25)
// console.log(p1.getName())