// const h1id=document.querySelector('#h1id')
// const newH1=document.createElement('h1')
// newH1.setAttribute('id','new-div')
// newH1.innerText='Hello World to be replaced!'

//h1id.replaceWith(newH1)


function replaceAll()
{
    const lis=document.querySelectorAll('li');
    lis.forEach(function(item)
    {
        item.innerHTML='Edited'

    })

}
replaceAll();