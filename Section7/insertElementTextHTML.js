function inserElement()
{
    let searched=document.querySelector('#master-h1')

    let h1=document.createElement('h2')
    h1.appendChild(document.createTextNode('h1 meow heading'))

    let h2=document.createElement('h2')
    h2.appendChild(document.createTextNode('h2 meow heading'))

    searched.appendChild(h1)

    //searched.insertAdjacentElement('beforebegin',h)
    //searched.insertAdjacentElement('afterend', h)
    //searched.insertAdjacentElement('afterbegin',h)

    searched.insertAdjacentElement('beforeend',h2)

}
inserElement()