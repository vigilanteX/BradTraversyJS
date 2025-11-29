const str = 'hello'
const strobj = new String('hello')
console.log(str, typeof str)
console.log(strobj, typeof strobj)


//boxing: adding wrapper over primitive type. As we cannot access fns on
//primitive type
console.log(str.toUpperCase())


//unboxing converting obj type to prim
console.log(strobj.valueOf(), typeof strobj.valueOf())

console.log(str.constructor)
console.log(strobj.constructor)

console.log(str instanceof String)
console.log(strobj instanceof String)


// Other types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);


//not to confuse function is an object
const funcLit = function (x) {
    return x * x;
}
console.log(funcLit, typeof funcLit);

//not to confuse function is an object
const funcObj=new Function('x', 'return x*x')
console.log(funcObj, typeof funcObj);
console.log(funcObj(2))


const obj={}
const obj2=new Object()
console.log(obj, typeof obj, obj instanceof Object);
console.log(obj2, typeof obj2, obj2 instanceof Object);


