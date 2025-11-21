// console.dir(window.document)
// console.log(window.document.body)
// console.log(window.document.body.innerText)
// console.log(window.document.body.innerHTML)
// console.log(window.document.links[0],window.document.links[1],
//     window.document.links[2]
// )
//

//Replace whole HTML content of body with AMAN with h1 tag
//window.document.body.innerHTML='<h1>AMAN</h1>'

//append at end
//document.write('Hello World!');

//get by id element and get all text inside
//console.log(document.getElementById('mellow').innerText)


//get by id element and get inner html inside
//console.log(document.getElementById('nbvc').innerHTML)

//search by id and replace inner text
//let searchedElement=document.getElementById('nbvc')
//searchedElement.innerHTML='<h2>this is h2 element</h2>'
//searchedElement.innerText='this is h2 element'

// let x=document.querySelector('#nbvc>h1')
// console.log(x.innerText)

let x=document.documentElement
x=document.head
x=document.body.children
x=document.doctype
x=document.contentType
x=document.forms//return array of form/s
x=document.links//returns array of a tag/s
x[0].id='googold-id'

//use className to add classes
x[0].className='googoldclass1 googoldclass2 googoldclass3'
x=x[0].classList
x=document.images
console.log(x)

