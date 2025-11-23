const selectParent=document.querySelector('#parent-div')

const insertH1=document.createElement('h1')
insertH1.setAttribute('id','child-div')
insertH1.innerText='Hello World'

const searchInDIV=document.querySelector('#master-h1')


selectParent.insertBefore(insertH1,searchInDIV)