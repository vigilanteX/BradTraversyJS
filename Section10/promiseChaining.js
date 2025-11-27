let p = new Promise((resolve, reject) => {

    resolve({name: "Aman", age: 26, company: "Infy"})

})

p.then(data => data.name).then(data => console.log(`Data final is ${data}`))