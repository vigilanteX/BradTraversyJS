function Employee(name, age) {
    this.name = name;
    this.age = age;
}
let emp=new Employee('Employee 1',25);

console.log(emp);
let arr=[1,2,3,4,5]
console.log(arr);
let string=new String();
console.log(string);

console.log(Object.getPrototypeOf(emp))