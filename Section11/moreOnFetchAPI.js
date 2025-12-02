fetch('http://localhost:3000/checkpost', {
    method: 'POST',
    body: JSON.stringify({name: "Aman", age: 26, height: 181}),
    headers: {'Brand': 'SGB'}
})
    .then(res => {
        console.log(res.status)
        if (res.status === 500) {
            throw new Error('Something went wrong')
        }
        return res
    })
    .then(data => console.log('data then 2')).catch(err => console.log('failed'));