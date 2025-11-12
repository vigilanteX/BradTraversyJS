let x;
x=5+'5'//55 string
x=5+(+'5')//10 number

x=5*'5'//25 number

x=5+null//5 number as null is zero

x=+null//null value is zero

x=Number(true)//1 number

x=Number(false)//0 number

x=10+true//11 number

x=10+false//10 number

x=10+undefined//NAN number
console.log(x,typeof x);