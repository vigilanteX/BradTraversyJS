const clickme=document.querySelector('#clickme')
const img=document.querySelector('#img-1')
//
// const onclick=()=>console.log('clickme used')
// const ondoubleclick=()=>console.log('ondoubleclick used')
// let defaultval=true;
// const onclickbgcolorchange=()=>{
//     let x=document.body.style
//     if (defaultval===true)
//     {
//         x.backgroundColor='red'
//     }
//     else
//     {
//         x.backgroundColor='green'
//     }
//     defaultval=!defaultval
//
// }


//click event
//clickme.addEventListener('click',onclick)


//double click event
//clickme.addEventListener('dblclick',ondoubleclick)

// clickme.addEventListener('click',onclickbgcolorchange
// )


//right mouse click
// clickme.addEventListener('contextmenu',()=>{
//     console.log('right click done')
// })

//mouse down
// const mouseDown=()=>console.log('mouseDown')
// const mouseUp=()=>console.log('mouseUp')
// const mouseWheel=()=>console.log('mouseWheel')
//
// clickme.addEventListener('mousedown', mouseDown)
// clickme.addEventListener('mouseup', mouseUp)
// clickme.addEventListener('wheel', mouseWheel)

//mouse over
//img.addEventListener('mouseover', ()=>console.log('mouseover'))
//mouse out
//img.addEventListener('mouseout', ()=>console.log('mouseout'))


//dragstart
img.addEventListener('dragstart',function (){
    console.log('drag start')
})
//drag
img.addEventListener('drag',function (){
    console.log('dragging')
})
//dragend
img.addEventListener('dragend',function (){
    console.log('drag ended')
})
