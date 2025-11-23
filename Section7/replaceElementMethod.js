// const h1id=document.querySelector('#h1id')
// const newH1=document.createElement('h1')
// newH1.setAttribute('id','new-div')
// newH1.innerText='Hello World to be replaced!'

//h1id.replaceWith(newH1)


// function replaceAll() {
//     const lis = document.querySelectorAll('li');
//     lis.forEach(function (item) {
//         item.innerHTML = 'Edited'
//
//     })
//
// }
//
// replaceAll();


function replaceH1Header()
{
    const header=document.querySelector('#header')
    console.log(header)
    const h1=document.querySelector('#meow')
    const h4=document.createElement('h4')
    h4.setAttribute('id','new value')
    h4.innerText='h2 new World'
    header.replaceChild(h4,h1)
}
replaceH1Header()