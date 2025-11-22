let x=document.createElement('h1')
x.className='class1'

//inner text is good if element already exist and we get or update not for new
// x.innerText = 'Hello World!'

let childNode=document.createTextNode('Hello world!')
x.appendChild(childNode)
console.log(x.textContent)
document.body.appendChild(x)