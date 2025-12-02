const jsonbody={
    name:"Aman",
    age:2222,
    number:9999999999,
}
const p=new Promise((resolve,reject)=>{

    setTimeout(function()
    {
        resolve(jsonbody)

    },3000)
})

//way 1 to consume using then
//p.then((res)=>{console.log(res)})

//way2 new way async await
// async function main(){
//     const res=await p;
//     console.log(JSON.stringify(res))
// }
// main()

//way 3 using fetch
const res=await fetch('http://localhost:3000/demoserverget',{method:"GET"})
const api=await res.json()
console.log(api)