// let x=36;
// let p=new Promise((resolve,reject)=>{
//
//     if (x%2===0)
//         resolve({'data':{'name':'Aman','age':26}});
//     else
//         reject('rejected');
// })
//
// p.then(x=>console.log(`value is ${x.data.name}`)).catch(x=>console.log(`error: ${x}`));


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('resolved')
        resolve({'name':'Aman'})
    },8000)
})
p2.then((x)=>console.log(x))

console.log('non blocking code line 1')
console.log('non blocking code line 2')
console.log('non blocking code line 3')

