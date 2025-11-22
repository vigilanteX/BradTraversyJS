// let output;
// const parent=document.querySelector('.parent')
// output=parent.childNodes;
// /*
// *
// 0:text
// 1:comment
// 2:text
// 3:div.child
// 4:text
// 5:div.child
// 6:text
// 7:div.child
// 8:text
// *
// * */
// console.log(output);
// console.log(output[0].nodeName);
// console.log(parent.childNodes[3].innerHTML);
// console.log(parent.childNodes[3].outerHTML);
// parent.childNodes[5].style.color='red'
//
// console.log(parent.firstChild)
// parent.lastChild.textContent='hellow wor';
// console.log(parent.lastChild.textContent)
//
//


let child= document.querySelector('.child')

console.log(child.parentNode)
console.log(child.nextSibling.nextSibling.textContent)