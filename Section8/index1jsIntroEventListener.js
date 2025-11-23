// function greeting()
// {
//     alert('hello greeting!')
// }


//add eventlistener way1
// const eveListenerAddTest=document.querySelector('#add-event-id')
// eveListenerAddTest.onclick=function()
// {
//     console.log('clicked')
//     alert('eveListenerAddTest')
// }


//add event listener way2
// const eventListenerAddTest=document.querySelector('#add-event-2-id')
// eventListenerAddTest.addEventListener('click',function ()
// {
//     console.log('add event');
// })

//add event listener way 3
const alertFn = function () {
    alert('hellow')
}
const eventListenerAddTest3 = document.querySelector('#add-event-3-id')
eventListenerAddTest3.addEventListener('click', alertFn)


// setTimeout(function () {
//   eventListenerAddTest3.removeEventListener('click', alertFn)
// }, 9000)

//executing event from program
setTimeout(function()
{
    eventListenerAddTest3.click()
},6000)