let p = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve()
    },5000)
})

function x() {
    console.log('world');
}

p.then(x)