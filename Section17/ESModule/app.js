//1 fn import
// import capitalize from "./Modules/utils.js";
// console.log(capitalize('aman'))

//2 fn import
// import {A,B} from './Modules/utils.js'
// A(); B();

//3import class
import Person from "./Modules/Person.js";
let p=new Person('Aman')
console.log(p.getName())