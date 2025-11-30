function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.height * this.width;
    }
}

const rect1 = new Rectangle('rectangle1', 2, 2);
const rect2 = new Rectangle('rectangle2', 3, 3);

// //add prop and function
rect1.newprop = 123;
// rect1.age=function()
// {
//     return 25
// }
// console.log(rect1);
// //console.log(rect1.age());
//
// //delete prop
// delete rect1.newprop
// console.log(rect1);
//
// //check object prop
// console.log(rect1.hasOwnProperty('name'));
//
// //check keys
// console.log(Object.keys(rect1))
// //check values
// console.log(Object.values(rect1))
//
// console.log(Object.entries(rect1))

//iterate over KVP
// for (let [key, value] of Object.entries(rect1)) {
//     console.log(`Rectangle ${key} is ${value}`);
// }



