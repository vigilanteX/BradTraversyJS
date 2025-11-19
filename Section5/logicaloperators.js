console.log(100>20 && 20<100 )
console.log(10>20 || 20<100 )

//&& return first falsy or last value
let a;
a=10 && 22
a=10 && 20 && 45
a=10 && 20 && 0 && 23
a=10 && false && 0 && 23

console.log(a)

// || or returns first truthy or last value

let b;
b=10||20;
b=0||NaN
console.log(b)

//?? returns right side operend when left is null or undefined

let c;
c=null??12
c=undefined??12

console.log(c)
