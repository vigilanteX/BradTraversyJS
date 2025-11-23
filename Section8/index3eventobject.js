let x = document.querySelector('#aman')


//passing event e
// x.addEventListener('click',function (e){
// console.log(e)
// })

let fn = function (e) {
    // //1-returns element on which event is performed in current case img
    // console.log(e.target)
    // //2-returns element on which event is performed in current case img
    // console.log(e.currentTarget)
    // //Examples we can do with above
    // e.target.style.border = "1px solid red"
    //
    // //3-returns event type in this case click
    // console.log(e.type)
    // //4-returns time stamp
    // console.log(e.timeStamp)
    //
    // // x co-ordinate mouse cursor value from whole window
    // console.log(e.clientX)
    // // y co-ordinate mouse cursor value from whole window
    // console.log(e.clientY)
    // // x co-ordinate mouse cursor value within element on which event is tried
    // console.log(e.offsetX)
    // // y co-ordinate mouse cursor value within element on which event is tried
    // console.log(e.offsetY)

    //console.log(e.screenX)

    //console.log(e.screenY)

}
// x.addEventListener('click', fn)

// let y=document.body.addEventListener('click',function (e)
// {
//     //on which you clicked. bubbling
//     console.log(e.target)
//     //on which event listener is attached
//     console.log(e.currentTarget)
//
// })

// let z = document.querySelector('#master-div')
// z.addEventListener('click', function (e) {
//     console.log(e.target)
//     console.log(e.currentTarget)
//
// })

let y=document.querySelector('a')
y.addEventListener('click',(e)=>{
    console.log('link clicked')
    e.preventDefault()
})