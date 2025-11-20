// let arr=[1,2,3,4,5,6]
// let red=arr.reduce((prev,curr)=>{
//     return prev+curr
// },0)
// console.log(red)

// //itteration goes
// IT 1: initial is 0 so prev is 0 and 1(prev+curr)=1
// IT 2: prev is 1 and 2(prev+curr)=3
// IT 3: prev is 3 and 3(prev+curr)=6
// IT 4: prev is 6 and 4(prev+curr)=10
// IT 5: prev is 10 and 5(prev+curr)=15
// IT 6: prev is 15 and 6(prev+curr)=21


const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];
let result=cart.reduce(function(prev,curr)
{
return prev + curr.price;
},0)
console.log(result);
