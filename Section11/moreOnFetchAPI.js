fetch('http://localhost:3000/checkpost',{
    method: 'POST',
    body: JSON.stringify({name:"Aman",age:26,height:181}),
    headers: {'Brand':'SGB'}
})
.then(res => res.status)
.then(data => console.log(data))