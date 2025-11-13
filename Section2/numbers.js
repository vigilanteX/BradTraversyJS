let x;
const num=new Number(5.2345)
console.log(num,typeof num)
console.log(typeof num.toString())
//if not in decimal still add decima dot and n number of zeroes
console.log(num.toFixed(2))
//counts all digits in precision
console.log(num.toPrecision(3))


const v=new Number(50000)
console.log(v.toExponential())//5e+4


const q=new Number(5000)
console.log(q.toLocaleString('en-IN'))
console.log(q.valueOf())