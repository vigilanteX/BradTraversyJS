let x=new Date(1763053243102)
console.log(x,typeof x)
console.log(Date.now())//gives in ms time from jan 1971

x=new Date(2025,1,2)//yyyy-mm-dd mm is zero index
console.log(x.toLocaleDateString('en-IN'))


console.log(new Date().getHours(),new Date().getMinutes(),new Date().getSeconds())


const i=new Date()
console.log(Intl.DateTimeFormat('en-IN').format(i))