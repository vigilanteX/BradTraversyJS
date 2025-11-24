const button=document.querySelector('#button');
const parent=document.querySelector('#parent');

button.addEventListener('click', e=>{
    console.log("button clicked");
    e.stopPropagation()
})
parent.addEventListener('click', e=>{
    console.log("parent div clicked");
})
document.body.addEventListener('click', e=>{
    console.log("body clicked");
})


//when we clicked on button which has parent div
//and both button and parent has event listener attached with same key like 'click'
//then when we click button event bubbles up and trigger parent too

//use e.stopPropagation() to stop propogation