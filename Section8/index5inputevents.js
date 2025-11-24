const inputId = document.querySelector('#inputId')
const selectId = document.querySelector('#selectId')
const checkboxId= document.querySelector('#checkboxId')


// inputId.addEventListener('keydown', function (e) {
//  console.log('input')
// })



// inputId.addEventListener('input', function (e) {
//     console.log(e.target.value);
// })



// selectId.addEventListener('input',function(e)
// {
//     console.log(e.target.value)
// })


//
// checkboxId.addEventListener('input',(e)=>{
//      console.log(e.target.checked)
// })

inputId.addEventListener('focus',(e)=>{
    console.log('focused')
    e.target.style.backgroundColor = 'red';
})

// inputId.addEventListener('blur',()=>{
//     console.log('blur or focused out')
// })