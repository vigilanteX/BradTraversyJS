let x=document.querySelector('#inputbx')
//keypress: once triggered when we hit
// x.addEventListener('keypress',(e)=>{
//     console.log('keypress')
// })

//keyup
// x.addEventListener('keyup',(e)=>{
//     console.log('keyup')
// })

// x.addEventListener('keydown', e => {
//     console.log('keydown')
// })
x.addEventListener('keydown',(e)=>{
    console.log(`Keyboard ${e.key} pressed`)
    console.log(`Keycode ${e.keyCode}`)
    console.log(`Keycode ${e.code}`)

    console.log(e.shiftKey)
    console.log(`key is pressed repeated ${e.repeat}`)


})