let x=setInterval(()=>{
    console.log(new Date().getHours()+" "+new Date().getMinutes()+" "+new Date().getSeconds())
},5000)


document.querySelector('#clearInterval').addEventListener('click', ()=>{
    clearInterval(x)
    console.log('clearInterval clicked')
})