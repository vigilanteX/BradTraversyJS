function getData(data, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", data);
    xhr.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            cb(JSON.parse(this.responseText));
        }

    }
    xhr.send();
}

getData('movies.json', (data) => {
    console.log(data)
    getData('actors.json', (data) => {
        console.log(data)
        getData('directors.json', (data) => {
            console.log(data)
        })
    })

})
// endpoint('movies.json');
// endpoint('directors.json')
// endpoint('actors.json')
