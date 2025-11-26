//using setTimeout
// let x = document.querySelector('#setTimer');
// x.addEventListener('click', () => {
//     setTimeout(() => {
//         console.log("hello");
//     }, 5000)
// })

let set=setTimeout(()=>{
    console.log('timer')
},4000)
console.log(`${set} value is timer returned`)
//clear timeout
let y = document.querySelector('#removeTimer')
y.addEventListener('click', () => {
    console.log('cancel clicked')
    clearInterval(set)
})