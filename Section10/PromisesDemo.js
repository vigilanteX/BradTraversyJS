//Creating promise
// let x = 36;
// let p = new Promise((resolve, reject) => {
//
//     if (x % 2 === 0)
//         resolve({'data': {'name': 'Aman', 'age': 26}});
//     else
//         reject('rejected');
// })
//
// p.then(x => console.log(`value is ${x.data.name}`)).catch(x => console.log(`error: ${x}`));


//resolving promise after 8 sec and replicating API response.
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('resolved')
//         resolve({'name':'Aman'})
//     },8000)
// })
// p2.then((x)=>console.log(x))
// console.log('non blocking code line 1')
// console.log('non blocking code line 2')
// console.log('non blocking code line 3')


//handling promise error using catch block
// let p3 = new Promise((resolve, reject) => {
//     let n = 3
//     n % 2 === 0 ? resolve('promise resolved') : reject('promise rejected');
// })
// p3.then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })


//handling finally block which will run whether there is error or not
// let p3 = new Promise((resolve, reject) => {
//     let n = 2
//     n % 3 === 0 ? resolve('promise resolved') : reject('promise rejected');
// })
// p3.then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// }).finally(()=>{
//     console.log('done')
// })