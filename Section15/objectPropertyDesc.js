const reactObj =
    {
        name: "Aman",
        age: 12222,
        number: 9876543210
    }
    reactObj.name='cvbnmxz'
console.log(Object.getOwnPropertyDescriptor(reactObj,'name'));

Object.defineProperty(reactObj,'name',{
    writable:false
})
reactObj.name='vbnmcxxxx'
console.log(Object.getOwnPropertyDescriptor(reactObj,'name'));
