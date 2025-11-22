function dirtyWay() {
    let parent = document.createElement('div')
    parent.setAttribute('id', 'parent-div')

    parent.innerHTML=`<h1 id='child-heading'>Hello world!</h1>`

    document.body.appendChild(parent)


}

function creatElement() {
    let parent = document.createElement('div')
    parent.setAttribute('id', 'parent-div')

    let child = document.createElement('h1')
    child.setAttribute('id', 'child-heading')
    child.appendChild(document.createTextNode('Hello world!'))

    parent.appendChild(child)
    document.body.appendChild(parent)

}

//creatElement()
dirtyWay()