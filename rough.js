function getdata(data, fn) {
    console.log('inside getData')
    fn(data)
}

getdata([1, 2, 3, 4, 5], (data) => {
    console.log(data)
    getdata(['A', 'B', 'C', 'D', 'E'], (data) => {
        console.log(data)
        getdata(['aman', 'adarsh', 'aditya'], (data) => {
            console.log(data)
        })
    })
})